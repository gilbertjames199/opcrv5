<?php

namespace App\Http\Controllers;
use App\Models\User;
use App\Models\Permission;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
class TimeSheetController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return inertia('Time_Sheets/Index', [
            //returns an array of users with name field only
            "permissions_all" => Permission::all(),
            "can" => [
                'createUser' => Auth::user()->can('create', User::class),
                'editUser' =>Auth::user()->can('edit', User::class),
                'deleteUser' =>Auth::user()->can('delete', User::class),
                'canViewUsers' =>Auth::user()->can('can_view_users', User::class),
                'canInsertUsers' =>Auth::user()->can('can_insert_users', User::class),
                'canEditUsers' =>Auth::user()->can('can_edit_users', User::class),
                'canDeleteUsers' =>Auth::user()->can('can_delete_users', User::class),
                'canUpdateUserPermissions' =>Auth::user()->can('can_update_user_permissions', User::class),
            ],
        ]);
    }

    public function new()
    {
        return inertia('Time_Sheets/New', [
            //returns an array of users with name field only
            "permissions_all" => Permission::all(),
            "can" => [
                'createUser' => Auth::user()->can('create', User::class),
                'editUser' =>Auth::user()->can('edit', User::class),
                'deleteUser' =>Auth::user()->can('delete', User::class),
                'canViewUsers' =>Auth::user()->can('can_view_users', User::class),
                'canInsertUsers' =>Auth::user()->can('can_insert_users', User::class),
                'canEditUsers' =>Auth::user()->can('can_edit_users', User::class),
                'canDeleteUsers' =>Auth::user()->can('can_delete_users', User::class),
                'canUpdateUserPermissions' =>Auth::user()->can('can_update_user_permissions', User::class),
            ],
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
