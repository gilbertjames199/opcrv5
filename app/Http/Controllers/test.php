<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Illuminate\Http\Request;

use App\Models\User;
use App\Models\Y01PersonalInfo;
use App\Models\Y02EducationAndTraining;
use App\Models\Y03VoterInfo;
use App\Models\Y04Organization;
use App\Models\Y05Work;
use App\Models\Y06NoWork;
use App\Models\Y07Insurance;
use App\Models\Y08PersonHealth;
use App\Models\Y09SexualHealth;
use App\Models\Y10MentalHealth;
use App\Models\Y11Crime;
use App\Models\Y12CommunistOrg;
use App\Models\Y13ServicesAndPrograms;
use App\Models\Y14ProgramImplementer;
use App\Models\Y15DisasterPrep;
use App\Models\Y16DisasterResponseTraining;
use App\Models\Y17DisasterDrill;
use App\Models\Y18SourceOfInfo;
use App\Models\Y19PersonalConcerns;
use App\Models\Y20VoluntaryWork;
use App\Models\Y21VolunteeringReasons;
use App\Models\Y22Agreement;
use App\Models\Y23Position;
use Illuminate\Support\Facades\Auth;

class DashBoardController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    //$totalAll = $this->totalAll();

    public function __construct(Y01PersonalInfo $model)
    {
        //$this->middleware(['auth','verified']);
        $this->model = $model;

    }

    public function index()
    {
        $level_now=Auth::user()->level;
        $municipality =Auth::user()->municipality;
        $barangay=Auth::user()->barangay;
        //dd('create: '.auth()->user()->can('create',User::class).'edit: '.auth()->user()->can('edit',User::class).'delete: '.auth()->user()->can('delete',User::class));
        $total_all = $this->totalAll($level_now, $municipality, $barangay);
        $total_osy = $this->countOSYnum($level_now, $municipality, $barangay);
        $total_osy_c = $this->computeOSYTotal($municipality, $barangay);
        $total_isy = $this->countISYnum($level_now, $municipality, $barangay);
        $total_emp = $this->totalEmployed($municipality, $barangay);

        $single=$this->countSingle($level_now, $municipality, $barangay);
        return inertia('Home', [
            //"stats" => $data,
            "total_all" =>$total_all,
            "total_osy" =>$total_osy,
            "total_isy" =>$total_isy,
            "average_age" =>$this->averageAge($municipality, $barangay),
            "single" =>$this->countSingle($level_now, $municipality, $barangay),
            "ISY" =>$this->countISY($level_now, $municipality, $barangay),
            "OSY" =>$this->countOSY($total_osy, $level_now, $municipality, $barangay),
            "working" =>$this->countWorking($municipality, $barangay),
            "non_working" =>$this->countNonWorking($municipality, $barangay),
            "with_specific_needs" =>$this->countDisabled($municipality, $barangay),
            "isy_percent" =>$this->countISYPercent($total_all, $level_now, $municipality, $barangay),
            "osy_percent" =>$this->countOSYPercent($total_all, $level_now, $municipality, $barangay),
            "isy_elem_percent" =>$this->countElementary($total_isy, $level_now, $municipality, $barangay),
            "isy_jhs_percent" =>$this->countJHS($total_isy, $level_now, $municipality, $barangay),
            "isy_shs_percent" =>$this->countSHS($total_isy, $level_now, $municipality, $barangay),
            "isy_college_percent" =>$this->countCollege($total_isy, $level_now, $municipality, $barangay),
            "isy_post_grad" =>$this->countPostGrad($total_isy, $level_now, $municipality, $barangay),
            "isy_no_org_percent" =>$this->countISYNoOrg($total_isy, $municipality, $barangay),
            "isy_org_percent" =>$this->countISYOrg($total_isy, $municipality, $barangay),
            "osy_no_elem_percent" =>$this->countOSYNOSchool($total_osy_c, $municipality, $barangay),
            "osy_elem_percent"=>$this->countOSYElem($total_osy_c, $municipality, $barangay),
            "osy_no_junior_percent"=>$this->countOSYJuniorLevel($total_osy_c, $municipality, $barangay),
            "osy_junior_percent"=>$this->countOSYJuniorLevelF($total_osy_c, $municipality, $barangay),
            "osy_no_senior_percent"=>$this->countOSYSeniorLevel($total_osy_c, $municipality, $barangay),
            "osy_senior_percent"=>$this->countOSYSeniorLevelF($total_osy_c, $municipality, $barangay),
            "reached_college_percent"=>$this->countOSYCollege($total_osy_c, $municipality, $barangay),
            "osy_org_yes" =>$this->countOSYOrg($total_osy_c, $municipality, $barangay),
            "osy_org_no"=>$this->countOSYNoOrg($total_osy_c, $municipality, $barangay),
            "working_childyouth" =>$this->percentChildYouthWorking($municipality, $barangay),
            "working_coreyouth" =>$this->percentCoreYouthWorking($municipality, $barangay),
            "working_adultYouth" =>$this->percentAdultYouthWorking($municipality, $barangay),
            "youth_employed"=>$this->percentYouthEmployed($total_all,$municipality, $barangay),
            "youth_employed_permanent"=>$this->percentYouthEmployedPerm($total_emp, $municipality, $barangay),
            "youth_employed_short"=>$this->percentYouthEmployedShort($total_emp, $municipality, $barangay),
            "youth_employed_day"=>$this->percentYouthEmployedDay($total_emp, $municipality, $barangay),
            "youth_unemployed"=>$this->percentYouthUnEmployed($total_all, $municipality, $barangay),
            "youth_employed_job_seeker" =>$this->percentYouthJobSeekers($total_all, $municipality, $barangay),
            "youth_have_sss"=>$this->percentYouthHaveInsurance($total_all, $municipality, $barangay),
            "smokers"=>$this->percentSmokers($total_all, $municipality, $barangay),
            "mothers"=>$this->percentMothers($total_all, $municipality, $barangay),
            "contra"=>$this->percentNoContra($total_all, $municipality, $barangay),
            "no_blood_type"=>$this->percentNoBloodType($total_all, $municipality, $barangay),
            "no_philhealth"=>$this->percentNoPhilHealth($total_all, $municipality, $barangay),
            "percent_disabled"=>$this->percentDisabled($total_all, $municipality, $barangay),
            "percent_disease"=>$this->percentDisease($total_all, $municipality, $barangay),
            "pregnant_no_philhealth"=>$this->percentPregnantNoPhilHealth($total_all, $municipality, $barangay),
            "mental"=>$this->percentMental($total_all, $municipality, $barangay),
            "elected"=>$this->percentElected($total_all, $municipality, $barangay),
            "not_member_all"=>$this->percentNotMember($total_all, $municipality, $barangay),
            "willing_vol"=>$this->percentWillingVol($total_all, $municipality, $barangay),
            "registered_voter"=>$this->percentRegisteredVoter($total_all, $municipality, $barangay),
            "voted_sk"=>$this->percentVotedSK($total_all, $municipality, $barangay),
            "voted_reg"=>$this->percentVotedReg($total_all, $municipality, $barangay),
            "disInfo_drrmo"=>$this->percentDisDRMMO($total_all, $municipality, $barangay),
            "disInfo_bar"=>$this->percentDisBarangay($total_all, $municipality, $barangay),
            "disInfo_TV"=>$this->percentDisTV($total_all, $municipality, $barangay),
            "disInfo_radio"=>$this->percentDisRadio($total_all, $municipality, $barangay),
            "disInfo_socmed"=>$this->percentDisSocMed($total_all, $municipality, $barangay),
            "info_newspaper" =>$this->percentInfoDRMMO($total_all, $municipality, $barangay),
            "info_bar" =>$this->percentInfoBarangay($total_all, $municipality, $barangay),
            "info_TV" =>$this->percentInfoTV($total_all, $municipality, $barangay),
            "info_radio" =>$this->percentInfoRadio($total_all, $municipality, $barangay),
            "info_socmed" =>$this->percentInfoSocMed($total_all, $municipality, $barangay),
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

    public function averageAge($municipality, $barangay){
        $num=DB::select('CALL get_average_age()');
        $num=json_decode($num[0]->ave_age,true);
        return number_format((float)$num, 2, '.', '');
    }

    public function countSingle($level_now, $municipality, $barangay){
        // $level_now=Auth::user()->level;
        // $municipality =Auth::user()->municipality;
        // $barangay=Auth::user()->barangay;

        $num =DB::table('y01_personal_infos')
                ->where('marital_status','=','Single')
                ->where('status','=','2')
                ->whereRaw('TIMESTAMPDIFF(YEAR,y01_personal_infos.month_day_year,CURDATE()) >= ? ', [15])
                ->whereRaw('TIMESTAMPDIFF(YEAR,y01_personal_infos.month_day_year,CURDATE()) <= ? ', [30]);

        if($barangay){
            $barangay=clone($num)->where('barangay','=',$barangay);
            $municipality = null;
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
        }

        $num=$num->count();

        /*$num_all = DB::table('y01_personal_infos')
                    ->count();*/
        //$num = $num/$num_all;
        $num=number_format($num, 0, '.', ',');
        return $num;
    }

    public function countISY($level_now, $municipality, $barangay){
        /*$num =DB::table('y02_education_and_trainings')
                ->where('current_school','=','Yes')
                ->count();
        */
        //dd($level_now.' - '.$municipality.' - '.$barangay);

        $num=$this->countISYnum($level_now, $municipality, $barangay);
        //dd('GGG: '.$num.' '.$level_now.' '.$municipality.' '.$barangay);
        $num=number_format($num, 0, '.', ',');

        return $num;
    }

    public function countISYnum($level_now, $municipality, $barangay){
        //**********$num=DB::select('CALL count_isy()');
        //dd($num);
        $num =DB::table('y01_personal_infos AS y01')
                ->select(DB::raw('count(*) AS cnt_isy'))
                ->leftjoin('y02_education_and_trainings AS y02','y02._uuid','=','y01._uuid')
                ->where('y02.highest_educ','<>','College Graduate')
                ->where('y02.highest_educ','<>','Post Graduate')
                ->where('y02.current_school','=','Yes')
                ->where('y02.status','=','2')
                ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) >= ? ', [15])
                ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) <= ? ', [30]);
        if($barangay){
            $num=clone($num)->where('barangay','=',$barangay);
            $municipality = null;
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
        }
        $num = clone($num)->get();
        $num = $num[0]->cnt_isy;
        //dd($num);
        return $num;
    }

    public function countOSY($total_osy, $municipality, $barangay){
        $num =$total_osy;
        $num =number_format($num, 0, '.', ',');

        return $num;
    }

    public function countOSYnum($level_now, $municipality, $barangay){
        // $num=DB::select('CALL count_osy()');
        // $num=json_decode($num[0]->osy_count,true);
        $num =DB::table('y01_personal_infos AS y01')
                ->select(DB::raw('count(*) AS cnt_isy'))
                ->leftjoin('y02_education_and_trainings AS y02','y02._uuid','=','y01._uuid')
                ->where('current_school','=','No')
                ->where('y01.status','=','2')
                ->where('y02.highest_educ','<>','College Graduate')
                ->where('y02.highest_educ','<>','Post Graduate')
                ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) >= ? ', [15])
                ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) <= ? ', [30]);

        if($barangay){
            $num=clone($num)->where('barangay','=',$barangay);
            $municipality = null;
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
        }
        $num = clone($num)->get();
        //dd('CountOSYNum: '.$num);
        $itm = $num[0]->cnt_isy;
        $num=json_decode($itm,true);
        //dd($num);
        return $num;

    }

    public function countWorking($municipality, $barangay){

        $num =DB::table('y01_personal_infos AS y01')
                ->select(DB::raw('count(*) AS cnt_isy'))
                ->leftjoin('y05_works AS y05','y05._uuid','=','y01._uuid')
                ->where('y05.primary_job','<>','')
                ->where('y01.status','=','2')
                ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) >= ? ', [15])
                ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) <= ? ', [30]);
        if($barangay){
            $num=clone($num)->where('barangay','=',$barangay);
            $municipality = null;
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
        }
        $num = clone($num)->get();
        $itm = $num[0]->cnt_isy;
        $num=json_decode($itm,true);
        $num=number_format($num, 0, '.', ',');
        return $num;
    }

    public function countNonWorking($municipality, $barangay){
        // $num =DB::table('y05_works')
        //         ->where('how_many_work','<','1')
        //         ->whereRaw('TIMESTAMPDIFF(YEAR,y01_personal_infos.month_day_year,CURDATE()) >= ? ', [15])
        //         ->whereRaw('TIMESTAMPDIFF(YEAR,y01_personal_infos.month_day_year,CURDATE()) <= ? ', [30])
        //         ->count();
        // $num=number_format($num, 0, '.', ',');
        $num =DB::table('y01_personal_infos AS y01')
                ->select(DB::raw('count(*) AS cnt_isy'))
                ->leftjoin('y05_works AS y05','y05._uuid','=','y01._uuid')
                ->where('y05.how_many_work','<','1')
                ->where('y01.status','=','2')
                ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) >= ? ', [15])
                ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) <= ? ', [30]);
        if($barangay){
            $num=clone($num)->where('barangay','=',$barangay);
            $municipality = null;
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
        }
        $num = clone($num)->get();
        $itm = $num[0]->cnt_isy;
        $num=json_decode($itm,true);
        $num=number_format($num, 0, '.', ',');
        return $num;
    }

    public function countDisabled($municipality, $barangay){
        // $num =DB::table('y08_person_healths')
        //         ->where('is_disabled','=','Yes')
        //         ->count();

        // $num=number_format($num, 0, '.', ',');
        // return $num;

        $num =DB::table('y01_personal_infos AS y01')
                ->select(DB::raw('count(*) AS cnt_isy'))
                ->leftjoin('y08_person_healths AS y08','y08._uuid','=','y01._uuid')
                ->where('y08.is_disabled','=','Yes')
                ->where('y01.status','=','2')
                ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) >= ? ', [15])
                ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) <= ? ', [30]);
        if($barangay){
            $num=clone($num)->where('barangay','=',$barangay);
            $municipality = null;
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
        }
        $num = clone($num)->get();
        $itm = $num[0]->cnt_isy;
        $num=json_decode($itm,true);
        $num=number_format($num, 0, '.', ',');
        return $num;
    }

    public function countISYPercent($total_all, $level_now, $municipality, $barangay){
        $total =$total_all;
        //dd($total_all);
        $num =DB::table('y01_personal_infos AS y01')
                ->leftjoin('y02_education_and_trainings AS y02','y02._uuid','=','y01._uuid')
                ->where('y02.current_school','=','Yes')
                ->where('y01.status','=','2')
                ->whereRaw('TIMESTAMPDIFF(YEAR,month_day_year,CURDATE()) >= ? ', [15])
                ->whereRaw('TIMESTAMPDIFF(YEAR,month_day_year,CURDATE()) <= ? ', [30]);
        if($barangay){
            $barangay=clone($num)->where('barangay','=',$barangay);
            $municipality = null;
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
        }

        $num=$num->count();
        if($total==0){
            $total=1;
        }
        //dd($total);
        $percent = $num/$total;
        $percent= $percent*100;
        //dd($num.' '.$total);
        return number_format((float)$percent, 2, '.', '');
    }

    public function countOSYPercent($total_all, $level_now, $municipality, $barangay){
        $total =$total_all;

        $num =DB::table('y01_personal_infos AS y01')
                ->leftjoin('y02_education_and_trainings AS y02','y02._uuid','=','y01._uuid')
                ->where('current_school','=','No')
                ->where('y01.status','=','2')
                ->whereRaw('TIMESTAMPDIFF(YEAR,month_day_year,CURDATE()) >= ? ', [15])
                ->whereRaw('TIMESTAMPDIFF(YEAR,month_day_year,CURDATE()) <= ? ', [30]);
                if($barangay){
                    $barangay=clone($num)->where('barangay','=',$barangay);
                    $municipality = null;
                }
                if($municipality){
                    $num=clone($num)->where('municipality','=',$municipality);
                }

                $num=$num->count();
        if($total==0){
            $total=1;
        }
        $percent = $num/$total;
        $percent= $percent*100;
        return number_format((float)$percent, 2, '.', '');
    }

    public function countElementary($total_isy, $level_now, $municipality, $barangay){
        //$total =DB::table('y02_education_and_trainings')->where('current_school','=','Yes')->count();
        $total= $total_isy;
        //$total=1000000000;
        // $num =DB::table('y02_education_and_trainings')
        //         ->where('current_school','=','Yes')
        //         ->where('highest_educ','=','Elementary Level');

        //**************************** */
        $num =DB::table('y01_personal_infos AS y01')
                ->select(DB::raw('count(*) AS cnt_isy'))
                ->leftjoin('y02_education_and_trainings AS y02','y02._uuid','=','y01._uuid')
                ->where('y02.current_school','=','Yes')
                ->where('y02.highest_educ','=','Elementary Level')
                ->where('y01.status','=','2')
                ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) >= ? ', [15])
                ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) <= ? ', [30]);
        if($barangay){
            $num=clone($num)->where('barangay','=',$barangay);
            $municipality = null;
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
        }
        $num = clone($num)->get();
        $itm = $num[0]->cnt_isy;
        $num=json_decode($itm,true);

        //***************** */
        if($total==0){
            $total=1;
        }
        $percent = $num/$total;
        $percent= $percent*100;
        //dd($num);
        return number_format((float)$percent, 2, '.', '');
    }

    public function countJHS($total_isy, $level_now, $municipality, $barangay){
        //$total =DB::table('y02_education_and_trainings')->where('current_school','=','Yes')->count();
        $total=$total_isy;
        $num =DB::table('y01_personal_infos AS y01')
                ->select(DB::raw('count(*) AS cnt_isy'))
                ->leftjoin('y02_education_and_trainings AS y02','y02._uuid','=','y01._uuid')
                ->where('y02.current_school','=','Yes')
                ->where('y02.highest_educ','Like','%Junior%')
                ->where('y01.status','=','2')
                ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) >= ? ', [15])
                ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) <= ? ', [30]);
        if($barangay){
            $num=clone($num)->where('barangay','=',$barangay);
            $municipality = null;
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
        }
        $num = clone($num)->get();
        $itm = $num[0]->cnt_isy;
        $num=json_decode($itm,true);
        //dd($num);
        //***************** */
        if($total==0){
            $total=1;
        }
        $percent = $num/$total;
        $percent= $percent*100;
        return number_format((float)$percent, 2, '.', '');
    }

    public function countSHS($total_isy, $level_now, $municipality, $barangay){
        $total =$total_isy;
        // $num =DB::table('y02_education_and_trainings')
        //         ->where('current_school','=','Yes')
        //         ->where('highest_educ','=','Senior High School Level')
        //         ->count();
        //**************************** */
        $num =DB::table('y01_personal_infos AS y01')
                ->select(DB::raw('count(*) AS cnt_isy'))
                ->leftjoin('y02_education_and_trainings AS y02','y02._uuid','=','y01._uuid')
                ->where('y02.current_school','=','Yes')
                ->where('y02.highest_educ','=','Senior High School Level')
                ->where('y01.status','=','2')
                ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) >= ? ', [15])
                ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) <= ? ', [30]);
        if($barangay){
            $num=clone($num)->where('barangay','=',$barangay);
            $municipality = null;
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
        }
        $num = clone($num)->get();
        $itm = $num[0]->cnt_isy;
        $num=json_decode($itm,true);

        //***************** */
        if($total==0){
            $total=1;
        }
        $percent = $num/$total;
        $percent= $percent*100;
        return number_format((float)$percent, 2, '.', '');
    }

    public function countCollege($total_isy, $level_now, $municipality, $barangay){
        $total =$total_isy;
        // $num =DB::table('y02_education_and_trainings')
        //         ->where('current_school','=','Yes')
        //         ->where(function ($query) { $query->where('highest_educ','=','College Level')
        //             ->orWhere('highest_educ','=','Senior High School Finisher');
        //         })
        //         ->count();
        //**************************** */
        $num =DB::table('y01_personal_infos AS y01')
                ->select(DB::raw('count(*) AS cnt_isy'))
                ->leftjoin('y02_education_and_trainings AS y02','y02._uuid','=','y01._uuid')
                ->where('y02.current_school','=','Yes')
                ->where(function ($query) { $query->where('y02.highest_educ','=','College Level')
                    ->orWhere('y02.highest_educ','=','Senior High School Finisher');
                })
                ->where('y01.status','=','2')
                ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) >= ? ', [15])
                ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) <= ? ', [30]);
        if($barangay){
            $num=clone($num)->where('barangay','=',$barangay);
            $municipality = null;
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
        }
        $num = clone($num)->get();
        $itm = $num[0]->cnt_isy;
        $num=json_decode($itm,true);

        //***************** */
        if($total==0){$total=1;}
        $percent = $num/$total;
        $percent= $percent*100;
        return number_format((float)$percent, 2, '.', '');
    }

    public function countPostGrad($total_isy, $level_now, $municipality, $barangay){
        $total =$total_isy;
        // $num =DB::table('y02_education_and_trainings')
        //         ->where('current_school','=','Yes')
        //         ->where(function ($query) { $query->where('highest_educ','=','Post Graduate')
        //             ->orWhere('highest_educ','=','College Graduate');
        //         })
        //         ->count();
        //**************************** */
        $num =DB::table('y01_personal_infos AS y01')
                ->select(DB::raw('count(*) AS cnt_isy'))
                ->leftjoin('y02_education_and_trainings AS y02','y02._uuid','=','y01._uuid')
                ->where('y02.current_school','=','Yes')
                ->where(function ($query) { $query->where('y02.highest_educ','=','Post Graduate')
                    ->orWhere('y02.highest_educ','=','College Graduate');
                })
                ->where('y01.status','=','2')
                ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) >= ? ', [15])
                ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) <= ? ', [30]);
        if($barangay){
            $num=clone($num)->where('barangay','=',$barangay);
            $municipality = null;
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
        }
        $num = clone($num)->get();
        $itm = $num[0]->cnt_isy;
        $num=json_decode($itm,true);

        //***************** */
        if($total==0){$total=1;}
        $percent = $num/$total;
        $percent= $percent*100;
        return number_format((float)$percent, 2, '.', '');
    }

    public function countISYNoOrg($total_isy, $municipality, $barangay){

        $total =$total_isy;
        $num =DB::table('y01_personal_infos AS y01')
                ->select(DB::raw('count(*) AS cnt_isy'))
                ->leftjoin('y04_organizations AS y04','y04._uuid','=','y01._uuid')
                ->leftjoin('y02_education_and_trainings AS y02','y02._uuid','=','y01._uuid')
                ->where('y02.current_school','=','Yes')
                ->where(function ($query) { $query->where('y04.org_specify_other','=','None')
                    ->orWhere('y04.org_specify_other','=','NA')
                    ->orWhere('y04.org_specify_other','=','N/A')
                    ->orWhere('y04.org_specify_other','LIKE','%No%');})
                ->where('y01.status','=','2')
                ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) >= ? ', [15])
                ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) <= ? ', [30]);
        if($barangay){
            $num=clone($num)->where('barangay','=',$barangay);
            $municipality = null;
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
        }
        $num = clone($num)->get();
        $itm = $num[0]->cnt_isy;
        $num=json_decode($itm,true);

        if($total==0){$total=1;}
        $percent = $num/$total;
        $percent= $percent*100;
        $num=number_format($percent, 0, '.', ',');
        //dd($num);
        return $num;
    }
    public function countISYOrg($total_isy, $municipality, $barangay){
        $total =$total_isy;
        $num =DB::table('y01_personal_infos AS y01')
                ->select(DB::raw('count(*) AS cnt_isy'))
                ->leftjoin('y04_organizations AS y04','y04._uuid','=','y01._uuid')
                ->leftjoin('y02_education_and_trainings AS y02','y02._uuid','=','y01._uuid')
                ->where('y02.current_school','=','Yes')
                ->where(function ($query) { $query->where('y04.org_specify_other','=','None')
                    ->orWhere('y04.org_specify_other','=','NA')
                    ->orWhere('y04.org_specify_other','=','N/A')
                    ->orWhere('y04.org_specify_other','LIKE','%No%');})
                ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) >= ? ', [15])
                ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) <= ? ', [30])
                ->where('y01.status','=','2');
        if($barangay){
            $num=clone($num)->where('barangay','=',$barangay);
            $municipality = null;
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
        }
        $num = clone($num)->get();
        $itm = $num[0]->cnt_isy;
        $num=json_decode($itm,true);

        if($total==0){$total=1;}
        $percent = $num/$total;
        $percent= $percent*100;
        $num=number_format($percent, 0, '.', ',');
        //dd($num);
        return $num;
    }

    public function countOSYNOSchool($total_osy_c, $municipality, $barangay){
        $total =$total_osy_c;
        // $num = DB::table('y02_education_and_trainings')
        // ->where([['y02_education_and_trainings.highest_educ','No Grade'],['y02_education_and_trainings.current_school','No']])
        // ->count();

        $num =DB::table('y01_personal_infos AS y01')
                ->select(DB::raw('count(*) AS cnt_isy'))
                ->leftjoin('y02_education_and_trainings AS y02','y02._uuid','=','y01._uuid')
                ->where([['y02.highest_educ','No Grade'],['y02.current_school','No']])
                ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) >= ? ', [15])
                ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) <= ? ', [30])
                ->where('y01.status','=','2');
        if($barangay){
            $num=clone($num)->where('barangay','=',$barangay);
            $municipality = null;
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
        }
        $num = clone($num)->get();
        $itm = $num[0]->cnt_isy;
        $num=json_decode($itm,true);

        if($total==0){$total=1;}
        $percent = $num/$total;
        $percent= $percent*100;
        return number_format((float)$percent, 2, '.', '');
    }

    public function countOSYElem($total_osy_c, $municipality, $barangay){
        $total =$total_osy_c;
        // $num = DB::table('y02_education_and_trainings')
        // ->where([['y02_education_and_trainings.highest_educ','Elementary Level'],['y02_education_and_trainings.current_school','No']])
        // ->count();

        $num =DB::table('y01_personal_infos AS y01')
                ->select(DB::raw('count(*) AS cnt_isy'))
                ->leftjoin('y02_education_and_trainings AS y02','y02._uuid','=','y01._uuid')
                ->where([['y02.highest_educ','Elementary Level'],['y02.current_school','No']])
                ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) >= ? ', [15])
                ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) <= ? ', [30])
                ->where('y01.status','=','2');
        if($barangay){
            $num=clone($num)->where('barangay','=',$barangay);
            $municipality = null;
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
        }
        $num = clone($num)->get();
        $itm = $num[0]->cnt_isy;
        $num=json_decode($itm,true);

        if($total==0){$total=1;}
        $percent = $num/$total;
        $percent= $percent*100;
        return number_format((float)$percent, 2, '.', '');
    }

    public function countOSYJuniorLevel($total_osy_c, $municipality, $barangay){
        $total =$total_osy_c;
        // $num = DB::table('y02_education_and_trainings')
        // ->where(function ($query) { $query->where('y02_education_and_trainings.highest_educ','=','Junior High School Level')
        //     ->orWhere('y02_education_and_trainings.highest_educ','=','Junior Level');})
        // ->where('y02_education_and_trainings.current_school','=','No')
        // ->count();

        $num =DB::table('y01_personal_infos AS y01')
                ->select(DB::raw('count(*) AS cnt_isy'))
                ->leftjoin('y02_education_and_trainings AS y02','y02._uuid','=','y01._uuid')
                ->where(function ($query) { $query->where('y02.highest_educ','=','Junior High School Level')
                    ->orWhere('y02.highest_educ','=','Junior Level');})
                ->where('y02.current_school','=','No')
                ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) >= ? ', [15])
                ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) <= ? ', [30])
                ->where('y01.status','=','2');
        if($barangay){
            $num=clone($num)->where('barangay','=',$barangay);
            $municipality = null;
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
        }
        $num = clone($num)->get();
        $itm = $num[0]->cnt_isy;
        $num=json_decode($itm,true);

        if($total==0){$total=1;}
        $percent = $num/$total;
        $percent= $percent*100;
        return number_format((float)$percent, 2, '.', '');
    }

    public function countOSYJuniorLevelF($total_osy_c, $municipality, $barangay){
        $total =$total_osy_c;
        // $num = DB::table('y02_education_and_trainings')
        // ->where([['y02_education_and_trainings.highest_educ','Junior High School Finisher'],['y02_education_and_trainings.current_school','No']])
        // ->count();

        $num =DB::table('y01_personal_infos AS y01')
                ->select(DB::raw('count(*) AS cnt_isy'))
                ->leftjoin('y02_education_and_trainings AS y02','y02._uuid','=','y01._uuid')
                ->where([['y02.highest_educ','Junior High School Finisher'],['y02.current_school','No']])
                ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) >= ? ', [15])
                ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) <= ? ', [30])
                ->where('y01.status','=','2');
        if($barangay){
            $num=clone($num)->where('barangay','=',$barangay);
            $municipality = null;
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
        }
        $num = clone($num)->get();
        $itm = $num[0]->cnt_isy;
        $num=json_decode($itm,true);


        if($total==0){$total=1;}
        $percent = $num/$total;
        $percent= $percent*100;
        return number_format((float)$percent, 2, '.', '');
    }

    public function countOSYSeniorLevel($total_osy_c, $municipality, $barangay){
        $total =$total_osy_c;
        // $num = DB::table('y02_education_and_trainings')
        // ->where([['y02_education_and_trainings.highest_educ','Senior High School Level'],['y02_education_and_trainings.current_school','No']])
        // ->count();

        $num =DB::table('y01_personal_infos AS y01')
                ->select(DB::raw('count(*) AS cnt_isy'))
                ->leftjoin('y02_education_and_trainings AS y02','y02._uuid','=','y01._uuid')
                ->where([['y02.highest_educ','Senior High School Level'],['y02.current_school','No']])
                ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) >= ? ', [15])
                ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) <= ? ', [30])
                ->where('y01.status','=','2');
        if($barangay){
            $num=clone($num)->where('barangay','=',$barangay);
            $municipality = null;
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
        }
        $num = clone($num)->get();
        $itm = $num[0]->cnt_isy;
        $num=json_decode($itm,true);
        //dd($num);
        if($total==0){$total=1;}
        $percent = $num/$total;
        $percent= $percent*100;
        return number_format((float)$percent, 2, '.', '');
    }

    public function countOSYSeniorLevelF($total_osy_c, $municipality, $barangay){
        $total =$total_osy_c;
        // $num = DB::table('y02_education_and_trainings')
        // ->where([['y02_education_and_trainings.highest_educ','Senior High School Finisher'],['y02_education_and_trainings.current_school','No']])
        // ->count();

        $num =DB::table('y01_personal_infos AS y01')
                ->select(DB::raw('count(*) AS cnt_isy'))
                ->leftjoin('y02_education_and_trainings AS y02','y02._uuid','=','y01._uuid')
                ->where([['y02.highest_educ','Senior High School Finisher'],['y02.current_school','No']])
                ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) >= ? ', [15])
                ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) <= ? ', [30])
                ->where('y01.status','=','2');
        if($barangay){
            $num=clone($num)->where('barangay','=',$barangay);
            $municipality = null;
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
        }
        $num = clone($num)->get();
        $itm = $num[0]->cnt_isy;
        $num=json_decode($itm,true);

        if($total==0){$total=1;}
        $percent = $num/$total;
        $percent= $percent*100;
        return number_format((float)$percent, 2, '.', '');
    }

    public function computeOSYTotal($municipality, $barangay){
        $tot= DB::table('y02_education_and_trainings')
                ->where('y02_education_and_trainings.current_school','=','No')
                ->where('y02_education_and_trainings.highest_educ','<>','College Graduate')
                ->where('y02_education_and_trainings.highest_educ','<>','Post Graduate')
                ->where('status','=','2')
                ->count();

        $num =DB::table('y01_personal_infos AS y01')
                ->select(DB::raw('count(*) AS cnt_isy'))
                ->leftjoin('y02_education_and_trainings AS y02','y02._uuid','=','y01._uuid')
                ->where('y02.current_school','=','No')
                ->where('y02.highest_educ','<>','College Graduate')
                ->where('y02.highest_educ','<>','Post Graduate')
                ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) >= ? ', [15])
                ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) <= ? ', [30])
                ->where('y01.status','=','2');
        if($barangay){
            $num=clone($num)->where('barangay','=',$barangay);
            $municipality = null;
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
        }
        $num = clone($num)->get();
        $itm = $num[0]->cnt_isy;
        $num=json_decode($itm,true);
        //dd($num);
        //$tot=(int)$tot;
        return $num;
    }

    public function countOSYCollege($total_osy_c, $municipality, $barangay){
        $total =$total_osy_c;
        // $num = DB::table('y02_education_and_trainings')
        // ->where([['y02_education_and_trainings.highest_educ','College Level'],['y02_education_and_trainings.current_school','No']])
        // ->count();

        $num =DB::table('y01_personal_infos AS y01')
                ->select(DB::raw('count(*) AS cnt_isy'))
                ->leftjoin('y02_education_and_trainings AS y02','y02._uuid','=','y01._uuid')
                ->where([['y02.highest_educ','College Level'],['y02.current_school','No']])
                ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) >= ? ', [15])
                ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) <= ? ', [30])
                ->where('y01.status','=','2');
        if($barangay){
            $num=clone($num)->where('barangay','=',$barangay);
            $municipality = null;
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
        }
        $num = clone($num)->get();
        $itm = $num[0]->cnt_isy;
        $num=json_decode($itm,true);


        if($total==0){$total=1;}
        $percent = $num/$total;
        $percent= $percent*100;
        return number_format((float)$percent, 2, '.', '');
    }

    public function countOSYNoOrg($total_osy_c, $municipality, $barangay){
        $total =$total_osy_c;
        if($total==0){$total=1;}


        $num =DB::table('y01_personal_infos AS y01')
                ->select(DB::raw('count(*) AS cnt_isy'))
                ->leftjoin('y02_education_and_trainings AS y02','y02._uuid','=','y01._uuid')
                ->leftjoin('y04_organizations AS y04','y04._uuid','=','y01._uuid')
                ->where('y02.current_school','=','No')
                ->where('y02.highest_educ','<>','College Graduate')
                ->where('y02.highest_educ','<>','Post Graduate')
                ->where(function ($query) { $query->where('y04.org_specify_other','=','None')
                    ->orWhere('y04.org_specify_other','=','NA')
                    ->orWhere('y04.org_specify_other','=','N/A')
                    ->orWhere('y04.org_specify_other','LIKE','%No%');})
                ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) >= ? ', [15])
                ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) <= ? ', [30])
                ->where('y01.status','=','2');
        if($barangay){
            $num=clone($num)->where('barangay','=',$barangay);
            $municipality = null;
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
        }
        $num = clone($num)->get();
        $itm = $num[0]->cnt_isy;
        $num=json_decode($itm,true);

        $percent = $num/$total;
        $percent= $percent*100;
        return number_format((float)$percent, 2, '.', '');
    }

    public function countOSYOrg($total_osy_c, $municipality, $barangay){
        // $num = DB::table('y04_organizations')
        //         ->join('y02_education_and_trainings','y04_organizations._uuid','=','y02_education_and_trainings._uuid')
        //         ->where('y04_organizations.org_specify_other','<>','None')
        //         ->where('y04_organizations.org_specify_other','<>','NA')
        //         ->where('y04_organizations.org_specify_other','<>','N/A')
        //         ->where('y04_organizations.org_specify_other','NOT LIKE','%No%')
        //         ->where('y02_education_and_trainings.current_school','=','No')
        //         ->where('y02_education_and_trainings.highest_educ','<>','College Graduate')
        //         ->where('y02_education_and_trainings.highest_educ','<>','Post Graduate')
        //         ->count('y04_organizations._uuid');
        $total =$total_osy_c;
        $num =DB::table('y01_personal_infos AS y01')
                ->select(DB::raw('count(*) AS cnt_isy'))
                ->leftjoin('y02_education_and_trainings AS y02','y02._uuid','=','y01._uuid')
                ->leftjoin('y04_organizations AS y04','y04._uuid','=','y01._uuid')
                ->where('y04.org_specify_other','<>','None')
                ->where('y04.org_specify_other','<>','NA')
                ->where('y04.org_specify_other','<>','N/A')
                ->where('y04.org_specify_other','NOT LIKE','%No%')
                ->where('y02.current_school','=','No')
                ->where('y02.highest_educ','<>','College Graduate')
                ->where('y02.highest_educ','<>','Post Graduate')
                ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) >= ? ', [15])
                ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) <= ? ', [30])
                ->where('y01.status','=','2');
        if($barangay){
            $num=clone($num)->where('barangay','=',$barangay);
            $municipality = null;
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
        }
        $num = clone($num)->get();
        $itm = $num[0]->cnt_isy;
        $num=json_decode($itm,true);
        if($total==0){$total=1;}
        $percent = $num/$total;
        $percent= $percent*100;
        return number_format((float)$percent, 2, '.', '');
    }

    //public function total
    public function percentChildYouthWorking($municipality, $barangay){

        $num =DB::table('y01_personal_infos AS y01')
            ->select(DB::raw('count(*) AS cnt_isy'))
            ->leftjoin('y05_works AS y05','y05._uuid','=','y01._uuid')
            ->where('y01.ageinyears','>',14)
            ->where('y01.ageinyears','<',18)
            ->where('y05.work_one_hour_last_week','=','Yes')
            ->where('y01.status','=','2');

        $total =DB::table('y01_personal_infos AS y01')
            ->select(DB::raw('count(*) AS cnt_isy'))
            ->leftjoin('y05_works AS y05','y05._uuid','=','y01._uuid')
            ->where('y01.ageinyears','>',14)
            ->where('y01.ageinyears','<',18)
            ->where('y01.status','=','2');
        if($barangay){
            $num=clone($num)->where('barangay','=',$barangay);
            $total=clone($total)->where('barangay','=',$barangay);
            $municipality = null;
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
            $total=clone($total)->where('municipality','=',$municipality);

        }
        $num = clone($num)->get();
        $total = clone($total)->get();
        $itm = $num[0]->cnt_isy;
        $tot = $total[0]->cnt_isy;
        $num=json_decode($itm,true);
        $total=json_decode($tot,true);
        if($total==0){$total=1;}
        $percent = $num/$total;
        $percent= $percent*100;
        //dd($percent.' num: '.$num.' tot: '.$total);
        return number_format((float)$percent, 2, '.', '');
    }

    public function percentCoreYouthWorking($municipality, $barangay){
        $num =DB::table('y01_personal_infos AS y01')
            ->select(DB::raw('count(*) AS cnt_isy'))
            ->leftjoin('y05_works AS y05','y05._uuid','=','y01._uuid')
            ->where('y01.ageinyears','>',17)
            ->where('y01.ageinyears','<',25)
            ->where('y05.work_one_hour_last_week','=','Yes')
            ->where('y01.status','=','2');

        $total =DB::table('y01_personal_infos AS y01')
            ->select(DB::raw('count(*) AS cnt_isy'))
            ->leftjoin('y05_works AS y05','y05._uuid','=','y01._uuid')
            ->where('y01.ageinyears','>',14)
            ->where('y01.ageinyears','<',18)
            ->where('y01.status','=','2');
        if($barangay){
            $num=clone($num)->where('barangay','=',$barangay);
            $total=clone($total)->where('barangay','=',$barangay);
            $municipality = null;
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
            $total=clone($total)->where('municipality','=',$municipality);

        }
        $num = clone($num)->get();
        $total = clone($total)->get();
        $itm = $num[0]->cnt_isy;
        $tot = $total[0]->cnt_isy;
        $num=json_decode($itm,true);
        $total=json_decode($tot,true);
        if($total==0){$total=1;}
        $percent = $num/$total;
        $percent= $percent*100;
        //dd($percent.' num: '.$num.' tot: '.$total);
        return number_format((float)$percent, 2, '.', '');
    }

    public function percentAdultYouthWorking($municipality, $barangay){
        $num =DB::table('y01_personal_infos AS y01')
            ->select(DB::raw('count(*) AS cnt_isy'))
            ->leftjoin('y05_works AS y05','y05._uuid','=','y01._uuid')
            ->where('y01.ageinyears','>',17)
            ->where('y01.ageinyears','<',25)
            ->where('y05.work_one_hour_last_week','=','Yes')
            ->where('y01.status','=','2');

        $total =DB::table('y01_personal_infos AS y01')
            ->select(DB::raw('count(*) AS cnt_isy'))
            ->leftjoin('y05_works AS y05','y05._uuid','=','y01._uuid')
            ->where('y01.ageinyears','>',17)
            ->where('y01.ageinyears','<',25)
            ->where('y01.status','=','2');
        if($barangay){
            $num=clone($num)->where('barangay','=',$barangay);
            $total=clone($total)->where('barangay','=',$barangay);
            $municipality = null;
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
            $total=clone($total)->where('municipality','=',$municipality);

        }
        $num = clone($num)->get();
        $total = clone($total)->get();
        $itm = $num[0]->cnt_isy;
        $tot = $total[0]->cnt_isy;
        $num=json_decode($itm,true);
        $total=json_decode($tot,true);
        if($total==0){$total=1;}
        $percent = $num/$total;
        $percent= $percent*100;
        //dd($percent);
        //dd($percent.' num: '.$num.' tot: '.$total);
        return number_format((float)$percent, 2, '.', '');
    }

    public function percentYouthEmployed($total_all, $municipality, $barangay){
        $total =$total_all;
        if($total==0){$total=1;}

        $num =DB::table('y01_personal_infos AS y01')
            ->select(DB::raw('count(*) AS cnt_isy'))
            ->leftjoin('y05_works AS y05','y05._uuid','=','y01._uuid')
            ->where('y01.ageinyears','>',17)
            ->where('y01.ageinyears','<',25)
            ->where('y05.work_one_hour_last_week','=','Yes')
            ->where('y01.status','=','2');

        if($barangay){
            $num=clone($num)->where('barangay','=',$barangay);
            $municipality = null;
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
        }
        $num = clone($num)->get();
        $itm = $num[0]->cnt_isy;
        $num=json_decode($itm,true);
        if($total==0){$total=1;}
        $percent = $num/$total;
        $percent= $percent*100;
        return number_format((float)$percent, 2, '.', '');
    }

    public function totalEmployed($municipality, $barangay){

        $num =DB::table('y01_personal_infos AS y01')
                ->select(DB::raw('count(*) AS cnt_isy'))
                ->leftjoin('y05_works AS y05','y05._uuid','=','y01._uuid')
                ->where('y05.emp_status','<>','')
                ->where('y01.status','=','2')
                ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) >= ? ', [15])
                ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) <= ? ', [30]);
        if($barangay){
            $num=clone($num)->where('barangay','=',$barangay);
            $municipality = null;
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
        }
        $num = clone($num)->get();
        $itm = $num[0]->cnt_isy;
        $num=json_decode($itm,true);
        //dd('num: '.$num);
        return $num;
    }

    public function percentYouthEmployedPerm($total_emp, $municipality, $barangay){
        $total = $total_emp;
        if($total==0){$total=1;}
        // $num=DB::table('y05_works')
        //     ->where('y05_works.emp_status','LIKE','%Permanent%')
        //     ->count('y05_works._uuid');
        //return $num;
        $num =DB::table('y01_personal_infos AS y01')
                ->select(DB::raw('count(*) AS cnt_isy'))
                ->leftjoin('y05_works AS y05','y05._uuid','=','y01._uuid')
                ->where('y05.emp_status','LIKE','%Permanent%')
                ->where('y01.status','=','2')
                ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) >= ? ', [15])
                ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) <= ? ', [30]);
        if($barangay){
            $num=clone($num)->where('barangay','=',$barangay);
            $municipality = null;
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
        }
        $num = clone($num)->get();
        $itm = $num[0]->cnt_isy;
        $num=json_decode($itm,true);


        $percent = $num/$total;
        $percent= $percent*100;
        return number_format((float)$percent, 2, '.', '');
    }

    public function percentYouthEmployedShort($total_emp, $municipality, $barangay){
        $total = $total_emp;
        if($total==0){$total=1;}
        // $num=DB::table('y05_works')
        //     ->where('y05_works.emp_status','LIKE','%Short%')
        //     ->count('y05_works._uuid');
        //return $num;
        $num =DB::table('y01_personal_infos AS y01')
                ->select(DB::raw('count(*) AS cnt_isy'))
                ->leftjoin('y05_works AS y05','y05._uuid','=','y01._uuid')
                ->where('y05.emp_status','LIKE','%Short%')
                ->where('y01.status','=','2')
                ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) >= ? ', [15])
                ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) <= ? ', [30]);
        if($barangay){
            $num=clone($num)->where('barangay','=',$barangay);
            $municipality = null;
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
        }
        $num = clone($num)->get();
        $itm = $num[0]->cnt_isy;
        $num=json_decode($itm,true);

        $percent = $num/$total;
        $percent= $percent*100;
        return number_format((float)$percent, 2, '.', '');
    }

    public function percentYouthEmployedDay($total_emp, $municipality, $barangay){
        $total = $total_emp;
        if($total==0){$total=1;}
        //return $num;

        $num =DB::table('y01_personal_infos AS y01')
                ->select(DB::raw('count(*) AS cnt_isy'))
                ->leftjoin('y05_works AS y05','y05._uuid','=','y01._uuid')
                ->where('y05.emp_status','LIKE','%Day%')
                ->where('y01.status','=','2')
                ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) >= ? ', [15])
                ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) <= ? ', [30]);
        if($barangay){
            $num=clone($num)->where('barangay','=',$barangay);
            $municipality = null;
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
        }
        $num = clone($num)->get();
        $itm = $num[0]->cnt_isy;
        $num=json_decode($itm,true);

        $percent = $num/$total;
        $percent= $percent*100;
        return number_format((float)$percent, 2, '.', '');
    }

    public function percentYouthUnEmployed($total_all, $municipality, $barangay){
        $total =$total_all;
        if($total==0){$total=1;}
        // $num=DB::table('y01_personal_infos')
        //     ->join('y05_works','y01_personal_infos._uuid','=','y05_works._uuid')
        //     ->where('y05_works.work_one_hour_last_week','=','No')
        //     ->count('y01_personal_infos.id');

        $num =DB::table('y01_personal_infos AS y01')
            ->select(DB::raw('count(*) AS cnt_isy'))
            ->leftjoin('y05_works AS y05','y05._uuid','=','y01._uuid')
            ->where('y05.work_one_hour_last_week','=','No')
            ->where('y01.status','=','2')
            ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) >= ? ', [15])
            ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) <= ? ', [30]);
        if($barangay){
            $num=clone($num)->where('barangay','=',$barangay);
            $municipality = null;
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
        }
        $num = clone($num)->get();
        $itm = $num[0]->cnt_isy;
        $num=json_decode($itm,true);

        $percent = $num/$total;
        $percent= $percent*100;
        return number_format((float)$percent, 2, '.', '');
    }

    public function totalAll($level_now, $municipality, $barangay){
        // $num=DB::select('CALL compute_total_all()');


        // $num=json_decode($num[0]->total_all,true);
        // /*$num=DB::table('y01_personal_infos')
        //     ->count('_uuid');*/
        // if($num==0){
        //     $num=1;
        // }
        // return $num;
        $num =DB::table('y01_personal_infos')
                ->where('status','=','2')
                ->whereRaw('TIMESTAMPDIFF(YEAR,y01_personal_infos.month_day_year,CURDATE()) >= ? ', [15])
                ->whereRaw('TIMESTAMPDIFF(YEAR,y01_personal_infos.month_day_year,CURDATE()) <= ? ', [30]);

        if($barangay){
            $barangay=clone($num)->where('barangay','=',$barangay);
            $municipality = null;
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
        }

        $num=$num->count();
        //dd($num);
        if($num==0){$num=1;}
        /*$num_all = DB::table('y01_personal_infos')
                    ->count();*/
        //$num = $num/$num_all;
        //$num=number_format($num, 0, '.', ',');
        return $num;
    }

    public function percentYouthJobSeekers($total_all, $municipality, $barangay){
        $total=$total_all;
        // $num=DB::table('y05_works')
        //     ->where('y05_works.try_work_business','=','Yes')
        //     ->count('y05_works._uuid');
        //if($total==0){$total=1;}
        $num =DB::table('y01_personal_infos AS y01')
            ->select(DB::raw('count(*) AS cnt_isy'))
            ->leftjoin('y05_works AS y05','y05._uuid','=','y01._uuid')
            ->where('y05.try_work_business','=','Yes')
            ->where('y01.status','=','2')
            ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) >= ? ', [15])
            ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) <= ? ', [30]);
        if($barangay){
            $num=clone($num)->where('barangay','=',$barangay);
            $municipality = null;
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
        }
        $num = clone($num)->get();
        $itm = $num[0]->cnt_isy;
        $num=json_decode($itm,true);

        $percent = $num/$total;
        $percent= $percent*100;
        //dd($total);
        return number_format((float)$percent, 2, '.', '');
    }

    public function percentYouthHaveInsurance($total_all, $municipality, $barangay){
        $total=$total_all;
        // $num=DB::table('y07_insurances')
        //     ->where('y07_insurances.sss','=','Yes')
        //     ->orWhere('y07_insurances.gsis','=','Yes')
        //     ->count('y07_insurances._uuid');
        //if($total==0){$total=1;}
        $num =DB::table('y01_personal_infos AS y01')
            ->select(DB::raw('count(*) AS cnt_isy'))
            ->leftjoin('y07_insurances AS y07','y07._uuid','=','y01._uuid')
            ->where('y07.sss','=','Yes')
            ->orWhere('y07.gsis','=','Yes')
            ->where('y01.status','=','2')
            ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) >= ? ', [15])
            ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) <= ? ', [30]);
        if($barangay){
            $num=clone($num)->where('barangay','=',$barangay);
            $municipality = null;
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
        }
        $num = clone($num)->get();
        $itm = $num[0]->cnt_isy;
        $num=json_decode($itm,true);
        //dd($num.' '.$total);
        $percent = $num/$total;
        $percent= $percent*100;
        return number_format((float)$percent, 2, '.', '');
    }

    public function percentSmokers($total_all, $municipality, $barangay){
        // $num=DB::table('y08_person_healths')
        //     ->where('y08_person_healths.is_smoker','=','Yes')
        //     ->count('y08_person_healths._uuid');

        $num =DB::table('y01_personal_infos AS y01')
            ->select(DB::raw('count(*) AS cnt_isy'))
            ->leftjoin('y08_person_healths AS y08','y08._uuid','=','y01._uuid')
            ->where('y08.is_smoker','=','Yes')
            ->where('y01.status','=','2')
            ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) >= ? ', [15])
            ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) <= ? ', [30]);
        if($barangay){
            $num=clone($num)->where('barangay','=',$barangay);
            $municipality = null;
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
        }
        $num = clone($num)->get();
        $itm = $num[0]->cnt_isy;
        $num=json_decode($itm,true);

        $total = $total_all;
        if($total==0){$total=1;}
        $percent = $num/$total;
        $percent= $percent*100;
        return number_format((float)$percent, 2, '.', '');
    }

    public function percentMothers($total_all, $municipality, $barangay){
        // $num=DB::table('y09_sexual_healths')
        //     ->where('y09_sexual_healths.is_pregnant_now','=','Yes')
        //     ->count('y09_sexual_healths._uuid');
        $total = $total_all;

        $num =DB::table('y01_personal_infos AS y01')
            ->select(DB::raw('count(*) AS cnt_isy'))
            ->leftjoin('y09_sexual_healths AS y09','y09._uuid','=','y01._uuid')
            ->where('y01.status','=','2')
            ->where('y09.is_pregnant_now','=','Yes')
            ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) >= ? ', [15])
            ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) <= ? ', [19]);
        if($barangay){
            $num=clone($num)->where('barangay','=',$barangay);
            $municipality = null;
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
        }
        $num = clone($num)->get();
        $itm = $num[0]->cnt_isy;
        $num=json_decode($itm,true);
        $percent = $num/$total;
        $percent= $percent*100;
        return number_format((float)$percent, 2, '.', '');
    }

    public function percentNoContra($total_all, $municipality, $barangay){
        // $num=DB::table('y09_sexual_healths')
        //     ->where('y09_sexual_healths.used_contraceptive','=','No')
        //     ->count('y09_sexual_healths._uuid');
        $total = $total_all;
        $num =DB::table('y01_personal_infos AS y01')
            ->select(DB::raw('count(*) AS cnt_isy'))
            ->leftjoin('y09_sexual_healths AS y09','y09._uuid','=','y01._uuid')
            ->where('y09.used_contraceptive','=','No')
            ->where('y01.status','=','2')
            ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) >= ? ', [15])
            ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) <= ? ', [30]);
        if($barangay){
            $num=clone($num)->where('barangay','=',$barangay);
            $municipality = null;
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
        }
        $num = clone($num)->get();
        $itm = $num[0]->cnt_isy;
        $num=json_decode($itm,true);

        $percent = $num/$total;
        $percent= $percent*100;
        return number_format((float)$percent, 2, '.', '');
    }

    public function percentNoBloodType($total_all, $municipality, $barangay){
        // $num=DB::table('y08_person_healths')
        //     ->where('y08_person_healths.blood_type','=','Don\'t know')
        //     ->count('y08_person_healths._uuid');
        $total = $total_all;
        //if($total==0){$total=1;}
        $num =DB::table('y01_personal_infos AS y01')
            ->select(DB::raw('count(*) AS cnt_isy'))
            ->leftjoin('y08_person_healths AS y08','y08._uuid','=','y01._uuid')
            ->where('y08.blood_type','=','Don\'t know')
            ->where('y01.status','=','2')
            ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) >= ? ', [15])
            ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) <= ? ', [30]);
        if($barangay){
            $num=clone($num)->where('barangay','=',$barangay);
            $municipality = null;
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
        }
        $num = clone($num)->get();
        $itm = $num[0]->cnt_isy;
        $num=json_decode($itm,true);

        $percent = $num/$total;
        $percent= $percent*100;
        return number_format((float)$percent, 2, '.', '');
    }

    public function percentNoPhilHealth($total_all, $municipality, $barangay){
        $total=$total_all;
        // $num=DB::table('y07_insurances')
        //     ->where('y07_insurances.philhealth','=','No')
        //     ->count('y07_insurances._uuid');
        //if($total==0){$total=1;}
        $num =DB::table('y01_personal_infos AS y01')
            ->select(DB::raw('count(*) AS cnt_isy'))
            ->leftjoin('y07_insurances AS y07','y07._uuid','=','y01._uuid')
            ->where('y07.philhealth','=','No')
            ->where('y01.status','=','2')
            ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) >= ? ', [15])
            ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) <= ? ', [30]);
        if($barangay){
            $num=clone($num)->where('barangay','=',$barangay);
            $municipality = null;
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
        }
        $num = clone($num)->get();
        $itm = $num[0]->cnt_isy;
        $num=json_decode($itm,true);

        $percent = $num/$total;
        $percent= $percent*100;
        return number_format((float)$percent, 2, '.', '');
    }

    public function percentDisabled($total_all, $municipality, $barangay){
        $total = $total_all;
        //if($total==0){$total=1;}
        $num = $this->countDisabled($municipality, $barangay);


        $percent = $num/$total;
        $percent= $percent*100;
        return number_format((float)$percent, 2, '.', '');
    }

    public function percentDisease($total_all, $municipality, $barangay){
        $total=$total_all;
        // $num=DB::table('y08_person_healths')
        // ->where('y08_person_healths.lifestyle_disease','=','Yes')
        // ->count('y08_person_healths._uuid');

        $num =DB::table('y01_personal_infos AS y01')
            ->select(DB::raw('count(*) AS cnt_isy'))
            ->leftjoin('y08_person_healths AS y08','y08._uuid','=','y01._uuid')
            ->where('y08.lifestyle_disease','=','Yes')
            ->where('y01.status','=','2')
            ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) >= ? ', [15])
            ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) <= ? ', [30]);
        if($barangay){
            $num=clone($num)->where('barangay','=',$barangay);
            $municipality = null;
            //dd($barangay.' municipality: '.$municipality);
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
            //dd($barangay.' municipalitysdfsdf: '.$municipality);
        }
        $num = clone($num)->get();
        $itm = $num[0]->cnt_isy;
        $num=json_decode($itm,true);
        //if($total==0){$total=1;}
        $percent = $num/$total;
        $percent= $percent*100;
        return number_format((float)$percent, 2, '.', '');
    }

    public function percentPregnantNoPhilHealth($total_all, $municipality, $barangay){
        $total=$total_all;
        // $num=DB::table('y09_sexual_healths')
        //         ->join('y07_insurances','y09_sexual_healths._uuid','=','y07_insurances._uuid')
        //         ->where([['y07_insurances.philhealth','No'],['y09_sexual_healths.is_pregnant_now','Yes']])
        //         ->count('y09_sexual_healths._uuid');
        //if($total==0){$total=1;}

        $num =DB::table('y01_personal_infos AS y01')
            ->select(DB::raw('count(*) AS cnt_isy'))
            ->leftjoin('y09_sexual_healths AS y09','y09._uuid','=','y01._uuid')
            ->leftjoin('y07_insurances AS y07','y07._uuid','=','y01._uuid')
            ->where([['y07.philhealth','No'],['y09.is_pregnant_now','Yes']])
            ->where('y01.status','=','2')
            ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) >= ? ', [15])
            ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) <= ? ', [30]);
        if($barangay){
            $num=clone($num)->where('barangay','=',$barangay);
            $municipality = null;
            //dd($barangay.' municipality: '.$municipality);
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
            //dd($barangay.' municipalitysdfsdf: '.$municipality);
        }
        $num = clone($num)->get();
        $itm = $num[0]->cnt_isy;
        $num=json_decode($itm,true);

        $percent = $num/$total;
        $percent= $percent*100;
        return number_format((float)$percent, 2, '.', '');
    }

    public function percentMental($total_all, $municipality, $barangay){
        $total=$total_all;
        // $num=DB::table('y08_person_healths')
        //     ->where('y08_person_healths.health_issues_mental','=','1')
        //     ->count('y08_person_healths._uuid');
        //if($total==0){$total=1;}

        $num =DB::table('y01_personal_infos AS y01')
            ->select(DB::raw('count(*) AS cnt_isy'))
            ->leftjoin('y08_person_healths AS y08','y08._uuid','=','y01._uuid')
            ->where('y08.health_issues_mental','=','1')
            ->where('y01.status','=','2')
            ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) >= ? ', [15])
            ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) <= ? ', [30]);
        if($barangay){
            $num=clone($num)->where('barangay','=',$barangay);
            $municipality = null;
            //dd($barangay.' municipality: '.$municipality);
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
            //dd($barangay.' municipalitysdfsdf: '.$municipality);
        }
        $num = clone($num)->get();
        $itm = $num[0]->cnt_isy;
        $num=json_decode($itm,true);
        $percent = $num/$total;
        $percent= $percent*100;
        return number_format((float)$percent, 2, '.', '');
    }

    public function percentElected($total_all, $municipality, $barangay){
        $total=$total_all;
        // $num=DB::table('y04_organizations')
        //         ->where('y04_organizations.org_elected','=','Yes')
        //         ->count('y04_organizations._uuid');
        //if($total==0){$total=1;}

        $num =DB::table('y01_personal_infos AS y01')
            ->select(DB::raw('count(*) AS cnt_isy'))
            ->leftjoin('y04_organizations AS y04','y04._uuid','=','y01._uuid')
            ->where('y04.org_elected','=','Yes')
            ->where('y01.status','=','2')
            ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) >= ? ', [15])
            ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) <= ? ', [30]);
        if($barangay){
            $num=clone($num)->where('barangay','=',$barangay);
            $municipality = null;
            //dd($barangay.' municipality: '.$municipality);
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
            //dd($barangay.' municipalitysdfsdf: '.$municipality);
        }
        $num = clone($num)->get();
        $itm = $num[0]->cnt_isy;
        $num=json_decode($itm,true);

        $percent = $num/$total;
        $percent= $percent*100;
        return number_format((float)$percent, 2, '.', '');
    }

    public function percentNotMember($total_all, $municipality, $barangay){
        $total=$total_all;

        //if($total==0){$total=1;}

        $num =DB::table('y01_personal_infos AS y01')
            ->select(DB::raw('count(*) AS cnt_isy'))
            ->leftjoin('y04_organizations AS y04','y04._uuid','=','y01._uuid')
            ->where('y04.org_specify_other','<>','None')
            ->where('y04.org_specify_other','<>','N/A')
            ->where('y04.org_specify_other','<>','NA')
            ->where('y04.org_specify_other','<>','')
            ->where('y04.org_specify_other','NOT LIKE','%Not yet%')
            ->where('y04.org_specify_other','<>','Nine')
            ->where('y01.status','=','2')
            ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) >= ? ', [15])
            ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) <= ? ', [30]);
        if($barangay){
            $num=clone($num)->where('barangay','=',$barangay);
            $municipality = null;
            //dd($barangay.' municipality: '.$municipality);
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
            //dd($barangay.' municipalitysdfsdf: '.$municipality);
        }
        $num = clone($num)->get();
        $itm = $num[0]->cnt_isy;
        $num=json_decode($itm,true);

        $percent = $num/$total;
        $percent= $percent*100;
        return number_format((float)$percent, 2, '.', '');
    }

    public function percentWillingVol($total_all, $municipality, $barangay){
        $total=$total_all;
        // $num=DB::table('y20_voluntary_works')
        //         ->where('y20_voluntary_works.is_interested_voluntary','=','Yes')
        //         ->count('y20_voluntary_works._uuid');

        $num =DB::table('y01_personal_infos AS y01')
            ->select(DB::raw('count(*) AS cnt_isy'))
            ->leftjoin('y20_voluntary_works AS y20','y20._uuid','=','y01._uuid')
            ->where('y20.is_interested_voluntary','=','Yes')
            ->where('y01.status','=','2')
            ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) >= ? ', [15])
            ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) <= ? ', [30]);
        if($barangay){
            $num=clone($num)->where('barangay','=',$barangay);
            $municipality = null;
            //dd($barangay.' municipality: '.$municipality);
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
            //dd($barangay.' municipalitysdfsdf: '.$municipality);
        }
        $num = clone($num)->get();
        $itm = $num[0]->cnt_isy;
        $num=json_decode($itm,true);
        $percent = $num/$total;
        $percent= $percent*100;
        return number_format((float)$percent, 2, '.', '');
    }

    public function percentRegisteredVoter($total_all, $municipality, $barangay){
        $total=$total_all;
        // $num=DB::table('y03_voter_infos')
        //     ->where('y03_voter_infos.registered_voter','=','Yes')
        //     ->count('y03_voter_infos._uuid');
        //if($total==0){$total=1;}

        $num =DB::table('y01_personal_infos AS y01')
            ->select(DB::raw('count(*) AS cnt_isy'))
            ->leftjoin('y03_voter_infos AS y03','y03._uuid','=','y01._uuid')
            ->where('y03.registered_voter','=','Yes')
            ->where('y01.status','=','2')
            ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) >= ? ', [15])
            ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) <= ? ', [30]);
        if($barangay){
            $num=clone($num)->where('barangay','=',$barangay);
            $municipality = null;
            //dd($barangay.' municipality: '.$municipality);
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
            //dd($barangay.' municipalitysdfsdf: '.$municipality);
        }
        $num = clone($num)->get();
        $itm = $num[0]->cnt_isy;
        $num=json_decode($itm,true);

        $percent = $num/$total;
        $percent= $percent*100;
        return number_format((float)$percent, 2, '.', '');
    }

    public function percentVotedSK($total_all, $municipality, $barangay){
        $total=$total_all;
        // $num=DB::table('y03_voter_infos')
        //     ->where('y03_voter_infos.voted_last_sk_election','=','Yes')
        //     ->count('y03_voter_infos._uuid');
        //if($total==0){$total=1;}

        $num =DB::table('y01_personal_infos AS y01')
            ->select(DB::raw('count(*) AS cnt_isy'))
            ->leftjoin('y03_voter_infos AS y03','y03._uuid','=','y01._uuid')
            ->where('y03.voted_last_sk_election','=','Yes')
            ->where('y01.status','=','2')
            ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) >= ? ', [15])
            ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) <= ? ', [30]);
        if($barangay){
            $num=clone($num)->where('barangay','=',$barangay);
            $municipality = null;
            //dd($barangay.' municipality: '.$municipality);
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
            //dd($barangay.' municipalitysdfsdf: '.$municipality);
        }
        $num = clone($num)->get();
        $itm = $num[0]->cnt_isy;
        $num=json_decode($itm,true);
        $percent = $num/$total;
        $percent= $percent*100;
        return number_format((float)$percent, 2, '.', '');
    }

    public function percentVotedReg($total_all, $municipality, $barangay){
        $total=$total_all;
        // $num=DB::table('y03_voter_infos')
        //     ->where('y03_voter_infos.voted_last_regular_election','=','Yes')
        //     ->count('y03_voter_infos._uuid');
        //if($total==0){$total=1;}

        $num =DB::table('y01_personal_infos AS y01')
            ->select(DB::raw('count(*) AS cnt_isy'))
            ->leftjoin('y03_voter_infos AS y03','y03._uuid','=','y01._uuid')
            ->where('y03.voted_last_regular_election','=','Yes')
            ->where('y01.status','=','2')
            ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) >= ? ', [15])
            ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) <= ? ', [30]);
        if($barangay){
            $num=clone($num)->where('barangay','=',$barangay);
            $municipality = null;
            //dd($barangay.' municipality: '.$municipality);
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
            //dd($barangay.' municipalitysdfsdf: '.$municipality);
        }
        $num = clone($num)->get();
        $itm = $num[0]->cnt_isy;
        $num=json_decode($itm,true);

        $percent = $num/$total;
        $percent= $percent*100;
        return number_format((float)$percent, 2, '.', '');
    }

    public function percentDisDRMMO($total_all, $municipality, $barangay){
        $total=$total_all;
        // $num=DB::table('y18_source_of_infos')
        //     ->where('y18_source_of_infos.disaster_info_source_prov','=','1')
        //     ->count('y18_source_of_infos._uuid');
        //if($total==0){$total=1;}

        $num =DB::table('y01_personal_infos AS y01')
            ->select(DB::raw('count(*) AS cnt_isy'))
            ->leftjoin('y18_source_of_infos AS y18','y18._uuid','=','y01._uuid')
            ->where('y18.disaster_info_source_prov','=','1')
            ->where('y01.status','=','2')
            ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) >= ? ', [15])
            ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) <= ? ', [30]);
        if($barangay){
            $num=clone($num)->where('barangay','=',$barangay);
            $municipality = null;
            //dd($barangay.' municipality: '.$municipality);
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
            //dd($barangay.' municipalitysdfsdf: '.$municipality);
        }
        $num = clone($num)->get();
        $itm = $num[0]->cnt_isy;
        $num=json_decode($itm,true);

        $percent = $num/$total;
        $percent= $percent*100;
        return number_format((float)$percent, 2, '.', '');
    }

    public function percentDisBarangay($total_all, $municipality, $barangay){
        $total=$total_all;
        // $num=DB::table('y18_source_of_infos')
        //     ->where('y18_source_of_infos.disaster_info_source_brgy','=','1')
        //     ->count('y18_source_of_infos._uuid');
        //if($total==0){$total=1;}


        $num =DB::table('y01_personal_infos AS y01')
            ->select(DB::raw('count(*) AS cnt_isy'))
            ->leftjoin('y18_source_of_infos AS y18','y18._uuid','=','y01._uuid')
            ->where('y18.disaster_info_source_brgy','=','1')
            ->where('y01.status','=','2')
            ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) >= ? ', [15])
            ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) <= ? ', [30]);
        if($barangay){
            $num=clone($num)->where('barangay','=',$barangay);
            $municipality = null;
            //dd($barangay.' municipality: '.$municipality);
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
            //dd($barangay.' municipalitysdfsdf: '.$municipality);
        }
        $num = clone($num)->get();
        $itm = $num[0]->cnt_isy;
        $num=json_decode($itm,true);


        $percent = $num/$total;
        $percent= $percent*100;
        return number_format((float)$percent, 2, '.', '');
    }

    public function percentDisTV($total_all, $municipality, $barangay){
        $total=$total_all;
        // $num=DB::table('y18_source_of_infos')
        //     ->where('y18_source_of_infos.disaster_info_source_tv','=','1')
        //     ->count('y18_source_of_infos._uuid');
        //if($total==0){$total=1;}

        $num =DB::table('y01_personal_infos AS y01')
            ->select(DB::raw('count(*) AS cnt_isy'))
            ->leftjoin('y18_source_of_infos AS y18','y18._uuid','=','y01._uuid')
            ->where('y18.disaster_info_source_tv','=','1')
            ->where('y01.status','=','2')
            ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) >= ? ', [15])
            ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) <= ? ', [30]);
        if($barangay){
            $num=clone($num)->where('barangay','=',$barangay);
            $municipality = null;
            //dd($barangay.' municipality: '.$municipality);
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
            //dd($barangay.' municipalitysdfsdf: '.$municipality);
        }
        $num = clone($num)->get();
        $itm = $num[0]->cnt_isy;
        $num=json_decode($itm,true);

        $percent = $num/$total;
        $percent= $percent*100;
        return number_format((float)$percent, 2, '.', '');
    }

    public function percentDisRadio($total_all, $municipality, $barangay){
        $total=$total_all;
        // $num=DB::table('y18_source_of_infos')
        //     ->where('y18_source_of_infos.disaster_info_source_radio','=','1')
        //     ->count('y18_source_of_infos._uuid');
        //if($total==0){$total=1;}

        $num =DB::table('y01_personal_infos AS y01')
            ->select(DB::raw('count(*) AS cnt_isy'))
            ->leftjoin('y18_source_of_infos AS y18','y18._uuid','=','y01._uuid')
            ->where('y18.disaster_info_source_radio','=','1')
            ->where('y01.status','=','2')
            ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) >= ? ', [15])
            ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) <= ? ', [30]);
        if($barangay){
            $num=clone($num)->where('barangay','=',$barangay);
            $municipality = null;
            //dd($barangay.' municipality: '.$municipality);
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
            //dd($barangay.' municipalitysdfsdf: '.$municipality);
        }
        $num = clone($num)->get();
        $itm = $num[0]->cnt_isy;
        $num=json_decode($itm,true);

        $percent = $num/$total;
        $percent= $percent*100;
        return number_format((float)$percent, 2, '.', '');
    }

    public function percentDisSocMed($total_all, $municipality, $barangay){
        $total=$total_all;
        // $num=DB::table('y18_source_of_infos')
        //     ->where('y18_source_of_infos.disaster_info_source_socmed','=','1')
        //     ->count('y18_source_of_infos._uuid');
        //if($total==0){$total=1;}

        $num =DB::table('y01_personal_infos AS y01')
            ->select(DB::raw('count(*) AS cnt_isy'))
            ->leftjoin('y18_source_of_infos AS y18','y18._uuid','=','y01._uuid')
            ->where('y18.disaster_info_source_socmed','=','1')
            ->where('y01.status','=','2')
            ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) >= ? ', [15])
            ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) <= ? ', [30]);
        if($barangay){
            $num=clone($num)->where('barangay','=',$barangay);
            $municipality = null;
            //dd($barangay.' municipality: '.$municipality);
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
            //dd($barangay.' municipalitysdfsdf: '.$municipality);
        }
        $num = clone($num)->get();
        $itm = $num[0]->cnt_isy;
        $num=json_decode($itm,true);

        $percent = $num/$total;
        $percent= $percent*100;
        return number_format((float)$percent, 2, '.', '');
    }

    //INfo
    public function percentInfoDRMMO($total_all, $municipality, $barangay){
        $total=$total_all;
        // $num=DB::table('y18_source_of_infos')
        //     ->where('y18_source_of_infos.news_source_news','=','1')
        //     ->count('y18_source_of_infos._uuid');
        //if($total==0){$total=1;}

        $num =DB::table('y01_personal_infos AS y01')
            ->select(DB::raw('count(*) AS cnt_isy'))
            ->leftjoin('y18_source_of_infos AS y18','y18._uuid','=','y01._uuid')
            ->where('y18.news_source_news','=','1')
            ->where('y01.status','=','2')
            ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) >= ? ', [15])
            ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) <= ? ', [30]);
        if($barangay){
            $num=clone($num)->where('barangay','=',$barangay);
            $municipality = null;
            //dd($barangay.' municipality: '.$municipality);
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
            //dd($barangay.' municipalitysdfsdf: '.$municipality);
        }
        $num = clone($num)->get();
        $itm = $num[0]->cnt_isy;
        $num=json_decode($itm,true);

        $percent = $num/$total;
        $percent= $percent*100;
        return number_format((float)$percent, 2, '.', '');
    }

    public function percentInfoBarangay($total_all, $municipality, $barangay){
        $total=$total_all;
        // $num=DB::table('y18_source_of_infos')
        //     ->where('y18_source_of_infos.disaster_info_source_brgy','=','1')
        //     ->count('y18_source_of_infos._uuid');
        //if($total==0){$total=1;}

        $num =DB::table('y01_personal_infos AS y01')
            ->select(DB::raw('count(*) AS cnt_isy'))
            ->leftjoin('y18_source_of_infos AS y18','y18._uuid','=','y01._uuid')
            ->where('y18.disaster_info_source_brgy','=','1')
            ->where('y01.status','=','2')
            ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) >= ? ', [15])
            ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) <= ? ', [30]);
        if($barangay){
            $num=clone($num)->where('barangay','=',$barangay);
            $municipality = null;
            //dd($barangay.' municipality: '.$municipality);
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
            //dd($barangay.' municipalitysdfsdf: '.$municipality);
        }
        $num = clone($num)->get();
        $itm = $num[0]->cnt_isy;
        $num=json_decode($itm,true);

        $percent = $num/$total;
        $percent= $percent*100;
        return number_format((float)$percent, 2, '.', '');
    }

    public function percentInfoTV($total_all, $municipality, $barangay){
        $total=$total_all;
        // $num=DB::table('y18_source_of_infos')
        //     ->where('y18_source_of_infos.news_source_local_tv','=','1')
        //     ->count('y18_source_of_infos._uuid');
        //if($total==0){$total=1;}

        $num =DB::table('y01_personal_infos AS y01')
            ->select(DB::raw('count(*) AS cnt_isy'))
            ->leftjoin('y18_source_of_infos AS y18','y18._uuid','=','y01._uuid')
            ->where('y18.news_source_local_tv','=','1')
            ->where('y01.status','=','2')
            ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) >= ? ', [15])
            ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) <= ? ', [30]);
        if($barangay){
            $num=clone($num)->where('barangay','=',$barangay);
            $municipality = null;
            //dd($barangay.' municipality: '.$municipality);
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
            //dd($barangay.' municipalitysdfsdf: '.$municipality);
        }
        $num = clone($num)->get();
        $itm = $num[0]->cnt_isy;
        $num=json_decode($itm,true);


        $percent = $num/$total;
        $percent= $percent*100;
        return number_format((float)$percent, 2, '.', '');
    }

    public function percentInfoRadio($total_all, $municipality, $barangay){
        $total=$total_all;
        // $num=DB::table('y18_source_of_infos')
        //     ->where('y18_source_of_infos.news_source_radio','=','1')
        //     ->count('y18_source_of_infos._uuid');
        //if($total==0){$total=1;}

        $num =DB::table('y01_personal_infos AS y01')
            ->select(DB::raw('count(*) AS cnt_isy'))
            ->leftjoin('y18_source_of_infos AS y18','y18._uuid','=','y01._uuid')
            ->where('y18.news_source_radio','=','1')
            ->where('y01.status','=','2')
            ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) >= ? ', [15])
            ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) <= ? ', [30]);
        if($barangay){
            $num=clone($num)->where('barangay','=',$barangay);
            $municipality = null;
            //dd($barangay.' municipality: '.$municipality);
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
            //dd($barangay.' municipalitysdfsdf: '.$municipality);
        }
        $num = clone($num)->get();
        $itm = $num[0]->cnt_isy;
        $num=json_decode($itm,true);


        $percent = $num/$total;
        $percent= $percent*100;
        return number_format((float)$percent, 2, '.', '');
    }

    public function percentInfoSocMed($total_all, $municipality, $barangay){
        $total=$total_all;
        // $num=DB::table('y18_source_of_infos')
        //     ->where('y18_source_of_infos.news_source_socmed','=','1')
        //     ->count('y18_source_of_infos._uuid');
        //if($total==0){$total=1;}

        $num =DB::table('y01_personal_infos AS y01')
            ->select(DB::raw('count(*) AS cnt_isy'))
            ->leftjoin('y18_source_of_infos AS y18','y18._uuid','=','y01._uuid')
            ->where('y18.news_source_socmed','=','1')
            ->where('y01.status','=','2')
            ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) >= ? ', [15])
            ->whereRaw('TIMESTAMPDIFF(YEAR,y01.month_day_year,CURDATE()) <= ? ', [30]);
        if($barangay){
            $num=clone($num)->where('barangay','=',$barangay);
            $municipality = null;
            //dd($barangay.' municipality: '.$municipality);
        }
        if($municipality){
            $num=clone($num)->where('municipality','=',$municipality);
            //dd($barangay.' municipalitysdfsdf: '.$municipality);
        }
        $num = clone($num)->get();
        $itm = $num[0]->cnt_isy;
        $num=json_decode($itm,true);


        $percent = $num/$total;
        $percent= $percent*100;
        return number_format((float)$percent, 2, '.', '');
    }

}

/***********************************************************************
EDUCATION CONTROLLER JUNIOR trans_choice('foo.bar', $count)************/
if($request->mun){
    $data_by_gender = DB::table("y01_personal_infos")
                    ->select("y01_personal_infos.barangay as place", DB::raw("COUNT(case when gender = 'male' then 1 else null end) as male"), DB::raw("COUNT(case when gender = 'female' then 1 else null end) as female"), DB::raw("COUNT(*) as total"))
                    ->whereRaw('TIMESTAMPDIFF(YEAR,month_day_year,CURDATE()) >= ? ', [15])
                    ->whereRaw('TIMESTAMPDIFF(YEAR,month_day_year,CURDATE()) <= ? ', [30])
                    ->where(Y02EducationAndTraining::select('current_school')->whereColumn('y02_education_and_trainings.id','y01_personal_infos.id'),'Yes')
                    ->where(Y02EducationAndTraining::select('highest_educ')->whereColumn('y02_education_and_trainings.id','y01_personal_infos.id'),'Like','%Junior%')
                    ->where('municipality','like','%'.$request->mun.'%')
                    ->where('status','=','2')
                    ->groupBy("y01_personal_infos.barangay")
                    ->get();
    $data_total_gender= DB::table("y01_personal_infos")
                    ->select(DB::raw("COUNT(case when gender = 'male' then 1 else null end) as male"), DB::raw("COUNT(case when gender = 'female' then 1 else null end) as female"), DB::raw("COUNT(*) as total"))
                    ->whereRaw('TIMESTAMPDIFF(YEAR,month_day_year,CURDATE()) >= ? ', [15])
                    ->whereRaw('TIMESTAMPDIFF(YEAR,month_day_year,CURDATE()) <= ? ', [30])
                    ->where(Y02EducationAndTraining::select('current_school')->whereColumn('y02_education_and_trainings.id','y01_personal_infos.id'),'Yes')
                    ->where(Y02EducationAndTraining::select('highest_educ')->whereColumn('y02_education_and_trainings.id','y01_personal_infos.id'),'Like','%Junior%')
                    ->where('municipality','like','%'.$request->mun.'%')
                    ->where('status','=','2')
                    ->get();
}
if($request->bar){
    $data_by_gender = DB::table("y01_personal_infos")
                    ->select("y01_personal_infos.purok_sitio as place", DB::raw("COUNT(case when gender = 'male' then 1 else null end) as male"), DB::raw("COUNT(case when gender = 'female' then 1 else null end) as female"), DB::raw("COUNT(*) as total"))
                    ->whereRaw('TIMESTAMPDIFF(YEAR,month_day_year,CURDATE()) >= ? ', [15])
                    ->whereRaw('TIMESTAMPDIFF(YEAR,month_day_year,CURDATE()) <= ? ', [30])
                    ->where(Y02EducationAndTraining::select('current_school')->whereColumn('y02_education_and_trainings.id','y01_personal_infos.id'),'Yes')
                    ->where(Y02EducationAndTraining::select('highest_educ')->whereColumn('y02_education_and_trainings.id','y01_personal_infos.id'),'Like','%Junior%')
                    ->where('barangay','like','%'.$request->bar.'%')
                    ->where('status','=','2')
                    ->groupBy("y01_personal_infos.purok_sitio")
                    ->orderByRaw('CONVERT(purok_sitio,SIGNED) asc')
                    ->get();
    $data_total_gender= DB::table("y01_personal_infos")
                    ->select(DB::raw("COUNT(case when gender = 'male' then 1 else null end) as male"), DB::raw("COUNT(case when gender = 'female' then 1 else null end) as female"), DB::raw("COUNT(*) as total"))
                    ->whereRaw('TIMESTAMPDIFF(YEAR,month_day_year,CURDATE()) >= ? ', [15])
                    ->whereRaw('TIMESTAMPDIFF(YEAR,month_day_year,CURDATE()) <= ? ', [30])
                    ->where(Y02EducationAndTraining::select('current_school')->whereColumn('y02_education_and_trainings.id','y01_personal_infos.id'),'Yes')
                    ->where(Y02EducationAndTraining::select('highest_educ')->whereColumn('y02_education_and_trainings.id','y01_personal_infos.id'),'Like','%Junior%')
                    ->where('barangay','like','%'.$request->bar.'%')
                    ->where('status','=','2')
                    ->get();
}
if($request->pur){
    $data_by_gender = DB::table("y01_personal_infos")
                    ->select("y01_personal_infos.purok_sitio as place", DB::raw("COUNT(case when gender = 'male' then 1 else null end) as male"), DB::raw("COUNT(case when gender = 'female' then 1 else null end) as female"), DB::raw("COUNT(*) as total"))
                    ->whereRaw('TIMESTAMPDIFF(YEAR,month_day_year,CURDATE()) >= ? ', [15])
                    ->whereRaw('TIMESTAMPDIFF(YEAR,month_day_year,CURDATE()) <= ? ', [30])
                    ->where(Y02EducationAndTraining::select('current_school')->whereColumn('y02_education_and_trainings.id','y01_personal_infos.id'),'Yes')
                    ->where(Y02EducationAndTraining::select('highest_educ')->whereColumn('y02_education_and_trainings.id','y01_personal_infos.id'),'Like','%Junior%')
                    ->where('purok_sitio','=',$request->pur)
                    ->where('barangay','like','%'.$request->bar.'%')
                    ->groupBy("y01_personal_infos.purok_sitio")
                    ->get();
    $data_total_gender= DB::table("y01_personal_infos")
                    ->select(DB::raw("COUNT(case when gender = 'male' then 1 else null end) as male"), DB::raw("COUNT(case when gender = 'female' then 1 else null end) as female"), DB::raw("COUNT(*) as total"))
                    ->whereRaw('TIMESTAMPDIFF(YEAR,month_day_year,CURDATE()) >= ? ', [15])
                    ->whereRaw('TIMESTAMPDIFF(YEAR,month_day_year,CURDATE()) <= ? ', [30])
                    ->where(Y02EducationAndTraining::select('current_school')->whereColumn('y02_education_and_trainings.id','y01_personal_infos.id'),'Yes')
                    ->where(Y02EducationAndTraining::select('highest_educ')->whereColumn('y02_education_and_trainings.id','y01_personal_infos.id'),'Like','%Junior%')
                    ->where('purok_sitio','=',$request->pur)
                    ->where('barangay','like','%'.$request->bar.'%')
                    ->get();
}
if($level_now==="provincial")
{


}
else if($level_now==="municipal")
{
$all_purok=[];
        $data = $this->model->with("y02")
        ->where('municipality','like','%'.$municipality.'%')
        ->whereRaw('TIMESTAMPDIFF(YEAR,month_day_year,CURDATE()) >= ? ', [15])
        ->whereRaw('TIMESTAMPDIFF(YEAR,month_day_year,CURDATE()) <= ? ', [30])
        ->where(Y02EducationAndTraining::select('current_school')->whereColumn('y02_education_and_trainings.id','y01_personal_infos.id'),'Yes')
        ->where(Y02EducationAndTraining::select('highest_educ')->whereColumn('y02_education_and_trainings.id','y01_personal_infos.id'),'Junior Level')
        ->when($request->search, function ($query, $searchItem) {
            $query->where('lastname', 'like', '%' . $searchItem . '%')
                ->orWhere('firstname', 'like', '%' . $searchItem . '%')
                ->where('municipality','like','%'.Auth::user()->municipality.'%')
                ->whereRaw('TIMESTAMPDIFF(YEAR,month_day_year,CURDATE()) >= ? ', [15])
                ->whereRaw('TIMESTAMPDIFF(YEAR,month_day_year,CURDATE()) <= ? ', [30])
                ->where(Y02EducationAndTraining::select('current_school')->whereColumn('y02_education_and_trainings.id','y01_personal_infos.id'),'Yes')
                ->where(Y02EducationAndTraining::select('highest_educ')->whereColumn('y02_education_and_trainings.id','y01_personal_infos.id'),'Junior Level');
        })
        ->when($request->gender, function($query, $gender){
            $query->where('gender','=',$gender)
            ->whereRaw('TIMESTAMPDIFF(YEAR,month_day_year,CURDATE()) >= ? ', [15])
            ->whereRaw('TIMESTAMPDIFF(YEAR,month_day_year,CURDATE()) <= ? ', [30])
            ->where(Y02EducationAndTraining::select('current_school')->whereColumn('y02_education_and_trainings.id','y01_personal_infos.id'),'Yes')
            ->where(Y02EducationAndTraining::select('highest_educ')->whereColumn('y02_education_and_trainings.id','y01_personal_infos.id'),'Junior Level');

        })
        ->when($request->bar, function($query, $bar){
            $query->where('barangay','like','%'.$bar.'%')
            ->where(Y02EducationAndTraining::select('current_school')->whereColumn('y02_education_and_trainings.id','y01_personal_infos.id'),'Yes')
            ->where(Y02EducationAndTraining::select('highest_educ')->whereColumn('y02_education_and_trainings.id','y01_personal_infos.id'),'Junior Level');
        })
        ->when($request->pur, function($query, $pur){
            $query->where('purok_sitio','=',$pur)
            ->whereRaw('TIMESTAMPDIFF(YEAR,month_day_year,CURDATE()) >= ? ', [15])
            ->whereRaw('TIMESTAMPDIFF(YEAR,month_day_year,CURDATE()) <= ? ', [30])
            ->where(Y02EducationAndTraining::select('current_school')->whereColumn('y02_education_and_trainings.id','y01_personal_infos.id'),'Yes')
            ->where(Y02EducationAndTraining::select('highest_educ')->whereColumn('y02_education_and_trainings.id','y01_personal_infos.id'),'Junior Level');
        })
        ->where('status','=','2')
        ->orderBy('created_at', 'desc')
        ->paginate(10)
        ->withQueryString();
    $data_by_gender = DB::table("y01_personal_infos")
                        ->select("y01_personal_infos.barangay as place", DB::raw("COUNT(case when gender = 'male' then 1 else null end) as male"), DB::raw("COUNT(case when gender = 'female' then 1 else null end) as female"), DB::raw("COUNT(*) as total"))
                        ->whereRaw('TIMESTAMPDIFF(YEAR,month_day_year,CURDATE()) >= ? ', [15])
                        ->whereRaw('TIMESTAMPDIFF(YEAR,month_day_year,CURDATE()) <= ? ', [30])
                        ->where(Y02EducationAndTraining::select('current_school')->whereColumn('y02_education_and_trainings.id','y01_personal_infos.id'),'Yes')
                        ->where(Y02EducationAndTraining::select('highest_educ')->whereColumn('y02_education_and_trainings.id','y01_personal_infos.id'),'Junior Level')
                        ->where('municipality','like','%'.$municipality.'%')
                        ->where('status','=','2')
                        ->groupBy("y01_personal_infos.barangay")
                        ->get();
    $data_total_gender= DB::table("y01_personal_infos")
                        ->select(DB::raw("COUNT(case when gender = 'male' then 1 else null end) as male"), DB::raw("COUNT(case when gender = 'female' then 1 else null end) as female"), DB::raw("COUNT(*) as total"))
                        ->whereRaw('TIMESTAMPDIFF(YEAR,month_day_year,CURDATE()) >= ? ', [15])
                        ->whereRaw('TIMESTAMPDIFF(YEAR,month_day_year,CURDATE()) <= ? ', [30])
                        ->where(Y02EducationAndTraining::select('current_school')->whereColumn('y02_education_and_trainings.id','y01_personal_infos.id'),'Yes')
                        ->where(Y02EducationAndTraining::select('highest_educ')->whereColumn('y02_education_and_trainings.id','y01_personal_infos.id'),'Junior Level')
                        ->where('municipality','like','%'.$municipality.'%')
                        ->where('status','=','2')
                        ->get();
    if($request->bar){
        $data_by_gender = DB::table("y01_personal_infos")
                        ->select("y01_personal_infos.purok_sitio as place", DB::raw("COUNT(case when gender = 'male' then 1 else null end) as male"), DB::raw("COUNT(case when gender = 'female' then 1 else null end) as female"), DB::raw("COUNT(*) as total"))
                        ->whereRaw('TIMESTAMPDIFF(YEAR,month_day_year,CURDATE()) >= ? ', [15])
                        ->whereRaw('TIMESTAMPDIFF(YEAR,month_day_year,CURDATE()) <= ? ', [30])
                        ->where(Y02EducationAndTraining::select('current_school')->whereColumn('y02_education_and_trainings.id','y01_personal_infos.id'),'Yes')
                        ->where(Y02EducationAndTraining::select('highest_educ')->whereColumn('y02_education_and_trainings.id','y01_personal_infos.id'),'Junior Level')
                        ->where('barangay','like','%'.$request->bar.'%')
                        ->where('status','=','2')
                        ->orderByRaw('CONVERT(purok_sitio,SIGNED) asc')
                        ->groupBy("y01_personal_infos.purok_sitio")
                        ->get();
        $data_total_gender= DB::table("y01_personal_infos")
                        ->select(DB::raw("COUNT(case when gender = 'male' then 1 else null end) as male"), DB::raw("COUNT(case when gender = 'female' then 1 else null end) as female"), DB::raw("COUNT(*) as total"))
                        ->whereRaw('TIMESTAMPDIFF(YEAR,month_day_year,CURDATE()) >= ? ', [15])
                        ->whereRaw('TIMESTAMPDIFF(YEAR,month_day_year,CURDATE()) <= ? ', [30])
                        ->where(Y02EducationAndTraining::select('current_school')->whereColumn('y02_education_and_trainings.id','y01_personal_infos.id'),'Yes')
                        ->where(Y02EducationAndTraining::select('highest_educ')->whereColumn('y02_education_and_trainings.id','y01_personal_infos.id'),'Junior Level')
                        ->where('barangay','like','%'.$request->bar.'%')
                        ->where('status','=','2')
                        ->get();
    }
    if($request->pur){
        $data_by_gender = DB::table("y01_personal_infos")
                        ->select("y01_personal_infos.purok_sitio as place", DB::raw("COUNT(case when gender = 'male' then 1 else null end) as male"), DB::raw("COUNT(case when gender = 'female' then 1 else null end) as female"), DB::raw("COUNT(*) as total"))
                        ->whereRaw('TIMESTAMPDIFF(YEAR,month_day_year,CURDATE()) >= ? ', [15])
                        ->whereRaw('TIMESTAMPDIFF(YEAR,month_day_year,CURDATE()) <= ? ', [30])
                        ->where(Y02EducationAndTraining::select('current_school')->whereColumn('y02_education_and_trainings.id','y01_personal_infos.id'),'Yes')
                        ->where(Y02EducationAndTraining::select('highest_educ')->whereColumn('y02_education_and_trainings.id','y01_personal_infos.id'),'Junior Level')
                        ->where('purok_sitio','=',$request->pur)
                        ->where('barangay','like','%'.$request->bar.'%')
                        ->where('status','=','2')
                        ->groupBy("y01_personal_infos.purok_sitio")
                        ->get();
        $data_total_gender= DB::table("y01_personal_infos")
                        ->select(DB::raw("COUNT(case when gender = 'male' then 1 else null end) as male"), DB::raw("COUNT(case when gender = 'female' then 1 else null end) as female"), DB::raw("COUNT(*) as total"))
                        ->whereRaw('TIMESTAMPDIFF(YEAR,month_day_year,CURDATE()) >= ? ', [15])
                        ->whereRaw('TIMESTAMPDIFF(YEAR,month_day_year,CURDATE()) <= ? ', [30])
                        ->where(Y02EducationAndTraining::select('current_school')->whereColumn('y02_education_and_trainings.id','y01_personal_infos.id'),'Yes')
                        ->where(Y02EducationAndTraining::select('highest_educ')->whereColumn('y02_education_and_trainings.id','y01_personal_infos.id'),'Junior Level')
                        ->where('purok_sitio','=',$request->pur)
                        ->where('barangay','like','%'.$request->bar.'%')
                        ->where('status','=','2')
                        ->get();
    }

}
else if($level_now==="barangay")
{
$data = $this->model->with("y02")
        ->where('barangay','like','%'.$barangay.'%')
        ->where('municipality','like','%'.$municipality.'%')
        ->where(Y02EducationAndTraining::select('current_school')->whereColumn('y02_education_and_trainings.id','y01_personal_infos.id'),'Yes')
        ->where(Y02EducationAndTraining::select('highest_educ')->whereColumn('y02_education_and_trainings.id','y01_personal_infos.id'),'Junior Level')
        ->when($request->gender, function($query, $gender){
            $query->where('gender','=',$gender)
            ->where(Y02EducationAndTraining::select('current_school')->whereColumn('y02_education_and_trainings.id','y01_personal_infos.id'),'Yes')
            ->where(Y02EducationAndTraining::select('highest_educ')->whereColumn('y02_education_and_trainings.id','y01_personal_infos.id'),'Junior Level');

        })
        ->when($request->search, function ($query, $searchItem) {
            $query->where('lastname', 'like', '%' . $searchItem . '%')
                ->orWhere('firstname', 'like', '%' . $searchItem . '%')
                ->where('barangay','like','%'.$barangay.'%')
                ->where('municipality','like','%'.$municipality.'%')
                ->where(Y02EducationAndTraining::select('current_school')->whereColumn('y02_education_and_trainings.id','y01_personal_infos.id'),'Yes')
                ->where(Y02EducationAndTraining::select('highest_educ')->whereColumn('y02_education_and_trainings.id','y01_personal_infos.id'),'Junior Level');
        })
        ->when($request->pur, function($query, $pur){
            $query->where('purok_sitio','=',$pur)
            ->where(Y02EducationAndTraining::select('current_school')->whereColumn('y02_education_and_trainings.id','y01_personal_infos.id'),'Yes')
            ->where(Y02EducationAndTraining::select('highest_educ')->whereColumn('y02_education_and_trainings.id','y01_personal_infos.id'),'Junior Level');
        })
        ->where('status','=','2')
        ->orderBy('created_at', 'desc')
        ->paginate(10)
        ->withQueryString();

$data_by_gender = DB::table("y01_personal_infos")
                    ->select("y01_personal_infos.purok_sitio as place", DB::raw("COUNT(case when gender = 'male' then 1 else null end) as male"), DB::raw("COUNT(case when gender = 'female' then 1 else null end) as female"), DB::raw("COUNT(*) as total"))
                    ->whereRaw('TIMESTAMPDIFF(YEAR,month_day_year,CURDATE()) >= ? ', [15])
                    ->whereRaw('TIMESTAMPDIFF(YEAR,month_day_year,CURDATE()) <= ? ', [30])
                    ->where(Y02EducationAndTraining::select('current_school')->whereColumn('y02_education_and_trainings.id','y01_personal_infos.id'),'Yes')
                    ->where(Y02EducationAndTraining::select('highest_educ')->whereColumn('y02_education_and_trainings.id','y01_personal_infos.id'),'Junior Level')
                    ->where('barangay','like','%'.$barangay.'%')
                    ->where('status','=','2')
                    ->groupBy("y01_personal_infos.purok_sitio")
                    ->orderByRaw('CONVERT(purok_sitio,SIGNED) asc')
                    ->get();
$data_total_gender= DB::table("y01_personal_infos")
                    ->select(DB::raw("COUNT(case when gender = 'male' then 1 else null end) as male"), DB::raw("COUNT(case when gender = 'female' then 1 else null end) as female"), DB::raw("COUNT(*) as total"))
                    ->whereRaw('TIMESTAMPDIFF(YEAR,month_day_year,CURDATE()) >= ? ', [15])
                    ->whereRaw('TIMESTAMPDIFF(YEAR,month_day_year,CURDATE()) <= ? ', [30])
                    ->where(Y02EducationAndTraining::select('current_school')->whereColumn('y02_education_and_trainings.id','y01_personal_infos.id'),'Yes')
                    ->where(Y02EducationAndTraining::select('highest_educ')->whereColumn('y02_education_and_trainings.id','y01_personal_infos.id'),'Junior Level')
                    ->where('barangay','like','%'.$barangay.'%')
                    ->where('status','=','2')
                    ->get();
if($request->pur){
    $data_by_gender = DB::table("y01_personal_infos")
                    ->select("y01_personal_infos.purok_sitio as place", DB::raw("COUNT(case when gender = 'male' then 1 else null end) as male"), DB::raw("COUNT(case when gender = 'female' then 1 else null end) as female"), DB::raw("COUNT(*) as total"))
                    ->whereRaw('TIMESTAMPDIFF(YEAR,month_day_year,CURDATE()) >= ? ', [15])
                    ->whereRaw('TIMESTAMPDIFF(YEAR,month_day_year,CURDATE()) <= ? ', [30])
                    ->where(Y02EducationAndTraining::select('current_school')->whereColumn('y02_education_and_trainings.id','y01_personal_infos.id'),'Yes')
                    ->where(Y02EducationAndTraining::select('highest_educ')->whereColumn('y02_education_and_trainings.id','y01_personal_infos.id'),'Junior Level')
                    ->where('purok_sitio','=',$request->pur)
                    ->where('barangay','like','%'.$barangay.'%')
                    ->groupBy("y01_personal_infos.purok_sitio")
                    ->get();
    $data_total_gender= DB::table("y01_personal_infos")
                    ->select(DB::raw("COUNT(case when gender = 'male' then 1 else null end) as male"), DB::raw("COUNT(case when gender = 'female' then 1 else null end) as female"), DB::raw("COUNT(*) as total"))
                    ->whereRaw('TIMESTAMPDIFF(YEAR,month_day_year,CURDATE()) >= ? ', [15])
                    ->whereRaw('TIMESTAMPDIFF(YEAR,month_day_year,CURDATE()) <= ? ', [30])
                    ->where(Y02EducationAndTraining::select('current_school')->whereColumn('y02_education_and_trainings.id','y01_personal_infos.id'),'Yes')
                    ->where(Y02EducationAndTraining::select('highest_educ')->whereColumn('y02_education_and_trainings.id','y01_personal_infos.id'),'Junior Level')
                    ->where('purok_sitio','=',$request->pur)
                    ->where('barangay','like','%'.$barangay.'%')
                    ->get();
}
}


//********************************************************************************** */
return inertia('Home', [
    //"stats" => $data,
    "total_all" =>$total_all,
    "total_osy" =>$total_osy,
    "total_isy" =>$total_isy,
    "average_age" =>$this->averageAge($municipality, $barangay),
    "single" =>$this->countSingle($level_now, $municipality, $barangay),
    "ISY" =>$this->countISY($level_now, $municipality, $barangay),
    "OSY" =>$this->countOSY($total_osy, $level_now, $municipality, $barangay),
    "working" =>$this->countWorking($municipality, $barangay),
    "non_working" =>$this->countNonWorking($municipality, $barangay),
    "with_specific_needs" =>$this->countDisabled($municipality, $barangay),
    "isy_percent" =>$this->countISYPercent($total_all, $level_now, $municipality, $barangay),
    "osy_percent" =>$this->countOSYPercent($total_all, $level_now, $municipality, $barangay),
    "isy_elem_percent" =>$this->countElementary($total_isy, $level_now, $municipality, $barangay),
    "isy_jhs_percent" =>$this->countJHS($total_isy, $level_now, $municipality, $barangay),
    "isy_shs_percent" =>$this->countSHS($total_isy, $level_now, $municipality, $barangay),
    "isy_college_percent" =>$this->countCollege($total_isy, $level_now, $municipality, $barangay),
    "isy_post_grad" =>$this->countPostGrad($total_isy, $level_now, $municipality, $barangay),
    "isy_no_org_percent" =>$this->countISYNoOrg($total_isy, $municipality, $barangay),
    "isy_org_percent" =>$this->countISYOrg($total_isy, $municipality, $barangay),
    "osy_no_elem_percent" =>$this->countOSYNOSchool($total_osy_c, $municipality, $barangay),
    "osy_elem_percent"=>$this->countOSYElem($total_osy_c, $municipality, $barangay),
    "osy_no_junior_percent"=>$this->countOSYJuniorLevel($total_osy_c, $municipality, $barangay),
    "osy_junior_percent"=>$this->countOSYJuniorLevelF($total_osy_c, $municipality, $barangay),
    "osy_no_senior_percent"=>$this->countOSYSeniorLevel($total_osy_c, $municipality, $barangay),
    "osy_senior_percent"=>$this->countOSYSeniorLevelF($total_osy_c, $municipality, $barangay),
    "reached_college_percent"=>$this->countOSYCollege($total_osy_c, $municipality, $barangay),
    "osy_org_yes" =>$this->countOSYOrg($total_osy_c, $municipality, $barangay),
    "osy_org_no"=>$this->countOSYNoOrg($total_osy_c, $municipality, $barangay),
    "working_childyouth" =>$this->percentChildYouthWorking($municipality, $barangay),
    "working_coreyouth" =>$this->percentCoreYouthWorking($municipality, $barangay),
    "working_adultYouth" =>$this->percentAdultYouthWorking($municipality, $barangay),
    "youth_employed"=>$this->percentYouthEmployed($total_all,$municipality, $barangay),
    "youth_employed_permanent"=>$this->percentYouthEmployedPerm($total_emp, $municipality, $barangay),
    "youth_employed_short"=>$this->percentYouthEmployedShort($total_emp, $municipality, $barangay),
    "youth_employed_day"=>$this->percentYouthEmployedDay($total_emp, $municipality, $barangay),
    "youth_unemployed"=>$this->percentYouthUnEmployed($total_all, $municipality, $barangay),
    "youth_employed_job_seeker" =>$this->percentYouthJobSeekers($total_all, $municipality, $barangay),
    "youth_have_sss"=>$this->percentYouthHaveInsurance($total_all, $municipality, $barangay),
    "smokers"=>$this->percentSmokers($total_all, $municipality, $barangay),
    "mothers"=>$this->percentMothers($total_all, $municipality, $barangay),
    "contra"=>$this->percentNoContra($total_all, $municipality, $barangay),
    "no_blood_type"=>$this->percentNoBloodType($total_all, $municipality, $barangay),
    "no_philhealth"=>$this->percentNoPhilHealth($total_all, $municipality, $barangay),
    "percent_disabled"=>$this->percentDisabled($total_all, $municipality, $barangay),
    "percent_disease"=>$this->percentDisease($total_all, $municipality, $barangay),
    "pregnant_no_philhealth"=>$this->percentPregnantNoPhilHealth($total_all, $municipality, $barangay),
    "mental"=>$this->percentMental($total_all, $municipality, $barangay),
    "elected"=>$this->percentElected($total_all, $municipality, $barangay),
    "not_member_all"=>$this->percentNotMember($total_all, $municipality, $barangay),
    "willing_vol"=>$this->percentWillingVol($total_all, $municipality, $barangay),
    "registered_voter"=>$this->percentRegisteredVoter($total_all, $municipality, $barangay),
    "voted_sk"=>$this->percentVotedSK($total_all, $municipality, $barangay),
    "voted_reg"=>$this->percentVotedReg($total_all, $municipality, $barangay),
    "disInfo_drrmo"=>$this->percentDisDRMMO($total_all, $municipality, $barangay),
    "disInfo_bar"=>$this->percentDisBarangay($total_all, $municipality, $barangay),
    "disInfo_TV"=>$this->percentDisTV($total_all, $municipality, $barangay),
    "disInfo_radio"=>$this->percentDisRadio($total_all, $municipality, $barangay),
    "disInfo_socmed"=>$this->percentDisSocMed($total_all, $municipality, $barangay),
    "info_newspaper" =>$this->percentInfoDRMMO($total_all, $municipality, $barangay),
    "info_bar" =>$this->percentInfoBarangay($total_all, $municipality, $barangay),
    "info_TV" =>$this->percentInfoTV($total_all, $municipality, $barangay),
    "info_radio" =>$this->percentInfoRadio($total_all, $municipality, $barangay),
    "info_socmed" =>$this->percentInfoSocMed($total_all, $municipality, $barangay),
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