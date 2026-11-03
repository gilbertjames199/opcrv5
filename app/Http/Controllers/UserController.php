<?php

namespace App\Http\Controllers;

use App\Models\FFUNCCOD;
use App\Models\User;
use App\Models\Permission;
use App\Models\PopspAgency;
use App\Models\TemporaryFile;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    protected $model;
    public function __construct(User $model)
    {
        $this->middleware(['auth', 'verified']);
        $this->model = $model;
    }

    public function index(Request $request)
    {
        // dd(auth()->user()->department_code);
        if (auth()->user()->department_code == '04') {
            $users = $this->model->with(['permissions'])
                ->when($request->search, function ($query, $searchItem) {
                    $query->where('UserName', 'like', '%' . $searchItem . '%')
                        ->orWhere('FullName', 'like', '%' . $searchItem . '%');
                })
                ->orderBy('recid', 'desc')
                ->paginate(10);
            return inertia('Users/Index', [
                "filters" => $request->only(['search']),
                "users" => $users,
            ]);
        } else if (auth()->user()->UserName == '8529') {
            $users = $this->model->with(['permissions'])
                ->when($request->search, function ($query, $searchItem) {
                    $query->where('UserName', 'like', '%' . $searchItem . '%')
                        ->orWhere('FullName', 'like', '%' . $searchItem . '%');
                })
                ->where('department_code', '11')
                ->orderBy('recid', 'desc')
                ->paginate(10);
            return inertia('Users/Index', [
                "filters" => $request->only(['search']),
                "users" => $users,
            ]);
        } else {
            return redirect('/forbidden')
                ->with('error', 'Access forbidden!');
        }
    }
    //public function sync_users()
    // public function index(Request $request)
    // {

    //     $user_data;
    //     if(Auth::user()->can('create', User::class)){
    //         $user_data=$this->model->
    // when($request->search, function ($query, $searchItem) {
    //     $query->where('name', 'like', '%' . $searchItem . '%');
    // })
    //                         ->orderBy('created_at', 'desc')
    //                         ->simplePaginate(10)
    //                         ->withQueryString()
    //                         ->through(fn($user) => [
    //                             'id' => $user->id,
    //                             'name' => $user->name,
    //                             "can" => [
    //                                 'edit' => auth()->user()->can('edit', $user),
    //                                 'delete' => auth()->user()->can('delete', $user),
    //                                 'canViewUsers' =>auth()->user()->can('can_view_users', $user),
    //                                 'canInsertUsers' =>auth()->user()->can('can_insert_users', $user),
    //                                 'canEditUsers' =>auth()->user()->can('can_edit_users', $user),
    //                                 'canDeleteUsers' =>auth()->user()->can('can_delete_users', $user),
    //                                 'canUpdateUserPermissions' =>auth()->user()->can('can_update_user_permissions', $user),
    //                             ],
    //                         ]);

    //         return inertia('Users/Index', [
    //             //returns an array of users with name field only
    //             "permissions_all" => Permission::all(),
    //             "users" => $user_data,
    //             "filters" => $request->only(['search']),
    //             "can" => [
    //                 'createUser' => Auth::user()->can('create', User::class),
    //                 'editUser' =>Auth::user()->can('edit', User::class),
    //                 'deleteUser' =>Auth::user()->can('delete', User::class),
    //                 'canViewUsers' =>Auth::user()->can('can_view_users', User::class),
    //                 'canInsertUsers' =>Auth::user()->can('can_insert_users', User::class),
    //                 'canEditUsers' =>Auth::user()->can('can_edit_users', User::class),
    //                 'canDeleteUsers' =>Auth::user()->can('can_delete_users', User::class),
    //                 'canUpdateUserPermissions' =>Auth::user()->can('can_update_user_permissions', User::class),
    //             ],
    //         ]);
    //     }else{
    //         return inertia('Forbidden/Index', [
    //             "can" => [
    //                 'createUser' => Auth::user()->can('create', User::class),
    //                 'editUser' =>Auth::user()->can('edit', User::class),
    //                 'deleteUser' =>Auth::user()->can('delete', User::class),
    //             ],
    //         ]);
    //     }

    // }
    //********************************** */
    public function userPermissions(Request $request)
    {
        //dd($request->id);
        $user_permissions = [];
        $user = User::find($request->id);
        //$user = User::find(2);
        //dd($user);
        //$user = $this->model->findOrFail($request->id);
        foreach ($user->permissions as $permission) {
            /*if($permission->pivot->permission_id==="3"){
                $found=true;
            }*/
            array_push($user_permissions, $permission->pivot->permission_id);
        }
        return $user_permissions;
    }

    public function allPermissions(Request $request)
    {
        return Permission::all();
    }


    public function create()
    {
        // dd("create");
        // $permissions = DB::table('permissions')->get();
        $FFUNCCOD = FFUNCCOD::where('FFUNCTION', 'LIKE', '%Office%')->get();
        // dd($FFUNCCOD);
        $popsp_agency =PopspAgency::all();
        $offices = DB::connection('mysql2')->table('offices')->get();
        return inertia('Users/Create', [
            "FFUNCCOD" => $FFUNCCOD,
            "offices" => $offices,
            "popsp_agency" => $popsp_agency,
        ]);
    }


    public function store(Request $request)
    {
        // dd($request);
        $attributes = $request->validate([
            'FullName'  => 'required',
            'UserName'  => ['required', 'unique:mysql2.systemusers'],
            'UserPassword'  => 'required',
            'UserType'  => 'required',
            'email'  => ['required', 'email'],
            'office' => 'required'
        ]);
        $password = md5($request->UserPassword);
        //identify FFUNCCOD and department_code of user
        $department_code = DB::connection('mysql2')->table('functions')
            ->where('FFUNCCOD', $request->office)
            ->first()->department_code;
        // dd($department_code);
        //save user
        // dd($request);
        DB::connection('mysql2')->table('systemusers')
            ->insert([
                'FullName' => $request->FullName,
                'UserName' => $request->UserName,
                'UserPassword' => $password,
                'UserType' => $request->UserType,
                'email' => $request->email,
                'department_code' => $department_code,
                'office' => $request->office,
                'popsp_agency' => $request->popsp_agency,
                'is_active' => '1'
            ]);
        $us = $this->model->where('UserName', $request->UserName)->first()->recid;
        DB::connection('mysql2')->table('accountaccess')->insert([
            'iduser' => $us,
            'FFUNCCOD' => $request->office
        ]);
        // dd("recid: " . $us);
        // $this->model->create($attributes);
        return redirect('/users')->with('message', 'User created');
    }



    public function edit(Request $request, $id)
    {
        // dd("edit");
        $permissions = DB::table('permissions')->get();
        $data = $this->model->where('recid', $id)->first([
            'FullName',
            'recid',
            'email',
            'UserName',
            'UserType',
            'office',
            'department_code',
            'UserPassword',
            'popsp_agency',
        ]);
        if ($data) {
            foreach ($data->getAttributes() as $key => $value) {

                // Skip recid
                if ($key === 'recid') {
                    continue;
                }

                // Clean only string fields
                if (is_string($value)) {
                    // Remove excessive spaces inside & trim ends
                    $data->$key = preg_replace('/\s+/', ' ', trim($value));
                }
            }
        }
        // if ($data) {
        //     foreach ($data->getAttributes() as $key => $value) {
        //         // Remove all whitespace characters
        //         $data->$key = is_string($value) ? preg_replace('/\s+/', '', $value) : $value;
        //     }
        // }
        $popsp_agency =PopspAgency::all();
        $FFUNCCOD = FFUNCCOD::where('FFUNCTION', 'LIKE', '%Office%')->get();
        return inertia('Users/Create', [
            "editData" => $data,
            "FFUNCCOD" => $FFUNCCOD,
            "permissions" => $permissions,
            "popsp_agency" => $popsp_agency,
            "can" => [
                'createUser' => Auth::user()->can('create', User::class),
                'editUser' => Auth::user()->can('edit', User::class),
                'deleteUser' => Auth::user()->can('delete', User::class),
            ],
        ]);
    }

    public function update(Request $request)
    {
        // $data = $this->model->findOrFail($request->id);
        // dd($request);
        $data = $this->model->where('recid', $request->id)->first();
        $data->update([
            'name' => $request->name,
            'email' => $request->email,
            'FullName' => $request->FullName,
            'UserName' => $request->UserName,
            // 'UserPassword' => $password,
            'UserType' => $request->UserType,
            'email' => $request->email,
            // 'department_code' => $department_code,
            'office' => $request->office,
            'popsp_agency' => $request->popsp_agency,
        ]);
        return redirect('/users')->with('message', 'Successfully updated data of ' . $request->FullName . '!');
    }

    public function destroy(Request $request)
    {
        $data = $this->model->findOrFail($request->id);
        $data->delete();

        return redirect('/users')->with('message', 'User deleted');
    }

    public function changePassword()
    {
        // return inertia("Users/ChangePassword");
        return inertia('Users/ChangePassword', [
            // "can" => [
            //     'createUser' => Auth::user()->can('create', User::class),
            //     'editUser' => Auth::user()->can('edit', User::class),
            //     'deleteUser' => Auth::user()->can('delete', User::class),
            // ],
        ]);
    }

    public function updatePassword(Request $request)
    {
        $old = $request->old;
        $new = $request->new;
        $confirm = $request->confirm;
        // dd($request);
        // if (!Hash::check($old, auth()->user()->password)) {
        //     return back()->with('error', 'Wrong Credentials');
        // }
        $pold = md5($old);
        $ppu = auth()->user()->UserPassword;
        //dd("OLD PASS: " . $pold . " CURRENT: " . $pp);
        if ($pold != $ppu) {
            return back()->with('error', 'Wrong Credentials');
        }

        if ($new !== $confirm) {
            return back()->with('error', 'Not the same');
        }
        // $user = DB::connection('mysql2')
        //     ->table('systemusers')
        //     ->where('recid', auth()->user()->id)
        //     ->first();
        // dd(auth()->user()->recid);
        // $user->password = md5($new);             auth()->user()->recid
        // $user->save();
        //auth()->user()->recid
        DB::connection('mysql2')->table('systemusers')
            ->where('recid', '=', auth()->user()->recid)
            ->update([
                'UserPassword' => md5($new)
                // Add more columns and values to update as needed
            ]);


        return back()->with('message', 'Password Updated');
    }

    public function settings()
    {
        //return inertia('Users/Settings');
        return inertia('Users/Settings', [
            "can" => [
                'createUser' => Auth::user()->can('create', User::class),
                'editUser' => Auth::user()->can('edit', User::class),
                'deleteUser' => Auth::user()->can('delete', User::class),
            ],
        ]);
    }

    public function changeName(Request $request)
    {
        $data = $this->model->findOrFail(auth()->user()->id);
        $data->update([
            'name' => $request->name,
        ]);
        return redirect('/users/settings')->with('message', 'User updated');
        /*return inertia('Users/Settings', [
            "can" => [
                'createUser' => Auth::user()->can('create', User::class),
                'editUser' =>Auth::user()->can('edit', User::class),
                'deleteUser' =>Auth::user()->can('delete', User::class),
            ],
        ])->with('message', 'User updated');*/
    }

    public function changePhoto(Request $request)
    {
        $data = $this->model->findOrFail(auth()->user()->id);

        $temporaryFile = TemporaryFile::where('folder', $request->folder)->first();

        if ($temporaryFile) {
            $data->addMedia(storage_path('app/avatars/tmp/' . $request->folder . '/' . $temporaryFile->filename))
                ->toMediaCollection('avatars');

            rmdir(storage_path('app/avatars/tmp/' . $request->folder));
            $temporaryFile->delete();
        }

        return redirect('/users/settings')->with('message', 'User updated');
    }

    public function updatePermissions(Request $request)
    {
        //retrieving all user permission
        $user_permissions = [];
        $user = User::find($request->my_id);
        $id = $request->my_id;
        $myArrLength = 0;
        $permissionsLength = 0;
        foreach ($user->permissions as $permission) {
            array_push($user_permissions, $permission->pivot->permission_id);
        }
        //newly updated permissions
        /*
            1.)  Find my_arr in permission_user table
            2.)  If not found, insert my_arr
            3.)  Find user_permissions in my_arr
            4.)  If not found, delete
        */

        $my_arr = $request->value;

        //dd($my_arr,$newArr,$user_permissions);
        //dd(array_diff($newArr));
        if ($my_arr) {
            $newArr = array_diff($user_permissions, $my_arr);

            if ($newArr) {
                foreach ($newArr as $newAr) {
                    DB::table('permission_user')
                        ->where([['permission_id', $newAr], ['user_id', $id]])
                        ->delete();
                }
            }
            $found = false;
            $myArrLength = count($my_arr);
            foreach ($my_arr as $my_ar) {
                $found = $this->findNewPermissions($id, $my_ar);
                if ($found) {
                } else {
                    DB::table('permission_user')->insert(['permission_id' => $my_ar, 'user_id' => $id]);
                }
                foreach ($user_permissions as $user_permission) {
                }
            }
        } else {
            DB::table('permission_user')
                ->where('user_id', '=', $id)
                ->delete();
        }
        if ($user_permissions) {
            $permissionsLength = count($user_permissions);
        } else {
        }
        return redirect('/users')->with('message', 'Permissions updated');
        //dd($my_arr);
    }

    public function findNewPermissions($u_id, $p_id)
    {
        $found = [];
        $found = DB::table('permission_user')
            ->select('permission_id')
            ->where([['permission_id', $p_id], ['user_id', $u_id]])
            ->get();
        if (count($found) != 0) {
            return true;
        } else {
            return false;
        }
    }

    public function update_verified_at()
    {
        $my_id = Auth::user()->id;
        dd($my_id);
        if ($my_id == 1) {
        } else {
            $data = $this->model->findOrFail($my_id);
            $data->update([
                'email_verified_at' => NULL,
            ]);
        }
    }

    public function getBarangays(Request $request)
    {
        $mun_where = $request->mun;
        //dd($mun_where);
        $data = DB::table('y01_personal_infos')
            ->distinct()
            ->select(DB::raw('(y01_personal_infos.barangay)'))
            ->where('y01_personal_infos.municipality', 'LIKE', '%' . $mun_where . '%')
            ->orderBy('y01_personal_infos.barangay', 'ASC')
            ->get();
        return ['data' => $data];
    }

    public function getPuroks(Request $request)
    {
        $data = DB::table('y01_personal_infos')
            ->distinct()
            ->select(DB::raw('(y01_personal_infos.purok_sitio)'))
            ->where([['y01_personal_infos.barangay', 'LIKE', '%' . $request->bar . '%'], ['y01_personal_infos.municipality', 'LIKE', '%' . $request->mun . '%']])
            ->orderBy('y01_personal_infos.purok_sitio', 'ASC')
            ->get();
        return ['data' => $data];
    }

    public function getPersonnel(Request $request)
    {
        $personnel = json_decode(file_get_contents(storage_path() . "/personnel.json"), true);
        return $personnel;
    }

    public function impersonate($id)
    {
        $user = $this->model->where('recid', $id)->first();

        // Check if user exists and has a non-null department_code
        if (!$user || is_null($user->department_code)) {
            return redirect('/users')->with('error', 'This user cannot be impersonated. Department code is missing.');
        }

        // Store the original user ID in session
        session(['impersonate_original_user' => auth()->user()->recid]);

        // Log in as the target user
        Auth::login($user);

        return redirect('/')->with([
            'message' => 'Now impersonating ' . $user->FullName,
            'impersonating' => true
        ]);
    }

    public function stopImpersonate()
    {
        // Check if currently impersonating
        if (!session('impersonate_original_user')) {
            return redirect('/')->with('error', 'You are not impersonating anyone.');
        }

        // Get the original user
        $original_user = $this->model->where('recid', session('impersonate_original_user'))->first();

        if (!$original_user) {
            session()->forget('impersonate_original_user');
            return redirect('/')->with('error', 'Original user not found.');
        }

        // Clear the impersonate session and log back in as original user
        session()->forget('impersonate_original_user');
        Auth::login($original_user);

        return redirect('/')->with('message', 'Stopped impersonating. Back to ' . $original_user->FullName);
    }
}
