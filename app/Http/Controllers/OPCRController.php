<?php

namespace App\Http\Controllers;

use App\Models\FFUNCCOD;
use App\Models\AccountAccess;
use App\Models\BudgetRequirement;
use App\Models\MajorFinalOutput;
use App\Models\Monitoring;
use App\Models\OfficeAccountable;
use App\Models\Output;
use App\Models\Performance;
use App\Models\ProgramAndProject;
use App\Models\Quality;
use App\Models\QualityRemarks;
use App\Models\rating;
use App\Models\RatingRemarks;
use App\Models\RevisionPlan;
use App\Models\SuccessIndicator;
use App\Models\Timeliness;
use App\Models\TimelinessRemarks;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use PhpParser\Node\Expr\FuncCall;

class OPCRController extends Controller
{
    //
    protected $model;
    public function __construct(AccountAccess $model)
    {
        $this->model = $model;
    }

    public function index(Request $request)
    {

        $functions = $this->model
            ->select('ff.FFUNCCOD', 'FFUNCTION')
            ->Join(DB::raw('fms.functions ff'), 'ff.FFUNCCOD', '=', 'accountaccess.ffunccod')
            ->where('iduser', auth()->user()->recid)
            ->get()
            ->map(function ($item) {
                $my_year = now()->year;

                // dd($my_year);

                //REVISION PLAN ID/ GET MOOE & PS
                $revision_plan = RevisionPlan::where('idmfo', '0')
                    ->where('idpaps', '0')
                    ->where('FFUNCCOD', $item->FFUNCCOD)
                    ->where('year_period', $my_year)
                    ->first();
                $mooe = "0.00";
                $ps = "0.00";
                if ($revision_plan) {
                    $mooe1 = BudgetRequirement::where('revision_plan_id', $revision_plan->id)
                        ->where('category', 'Maintenance, Operating, and Other Expenses')
                        ->sum('amount');

                    $ps1 = BudgetRequirement::where('revision_plan_id', $revision_plan->id)
                        ->where('category', 'Personnel Services')
                        ->sum('amount');
                    $mooe2 = (float)$mooe1;
                    $ps2 = (float)$ps1;
                    $mooe = number_format($mooe2, 2);
                    $ps = number_format($ps2, 2);
                } else {
                    //dd("empty no ps budget");
                }
                return [
                    "FFUNCCOD" => $item->FFUNCCOD,
                    "FFUNCTION" => $item->FFUNCTION,
                    "MOOE" => $mooe,
                    "PS" => $ps,
                ];
            });


        //YEAR NOW

        $mooe = "0.00";
        $ps = "0.00";
        return inertia('OPCR/Index', [
            "data" => $functions,
            "MOOE" => $mooe,
            "PS" => $ps,
        ]);
    }

    public function showopcr(Request $request, $FFUNCCOD)
    {

        // $data = $this->model
        //         ->where('idpaps',$id)
        //         ->with('paps')
        //         ->orderBy('created_at', 'desc')
        //         ->paginate(10)
        //         ->withQueryString();
        // dd($FFUNCCOD);
        $timelinessSub = "SELECT idpaps, GROUP_CONCAT(timeliness SEPARATOR ',') as timeliness
                     FROM `timelinesses`
                     GROUP by idpaps";
        $ratingSub = "SELECT
                    idpaps,
                    GROUP_CONCAT(numerical_rating SEPARATOR ',') as numerical_rating ,
                    GROUP_CONCAT(adjectival_rating SEPARATOR ',') as adjectival_rating,
                    GROUP_CONCAT(efficiency_quantity SEPARATOR ',') as efficiency_quantity
                    FROM `ratings` GROUP BY idpaps";

        $qualitySub = "SELECT
                    idpaps,
                    GROUP_CONCAT(quality SEPARATOR ',') as qualities
                    FROM `qualities` GROUP BY idpaps";
        $functions = FFUNCCOD::where('FFUNCCOD', $FFUNCCOD)->get();
        $office = $functions->pluck('FFUNCTION');
        $results = DB::table('major_final_outputs')
            ->select(
                'major_final_outputs.id',
                'major_final_outputs.mfo_desc',
                'program_and_projects.id',
                'program_and_projects.paps_desc',
                'outputs.Outputs',
                'performances.performance',
                'success_indicators.success_indicator',
                'office_accountables.office_accountable',
                'ratings.numerical_rating',
                'ratings.adjectival_rating',
                'ratings.efficiency_quantity',
                'rating_remarks.rating_remarks',
                'qualities.qualities',
                'quality_remarks.quality_remarks',
                'timelinesses.timeliness',
                'timeliness_remarks.timeliness_remarks',
                'monitorings.monitoring'
            )
            // ->selectRaw("
            // GROUP_CONCAT(DISTINCT ratings.numerical_rating SEPARATOR ',') AS numerical_ratings
            // ")
            ->leftJoin('program_and_projects', 'major_final_outputs.id', '=', 'program_and_projects.idmfo')
            ->leftJoin('outputs', 'program_and_projects.id', '=', 'outputs.idpaps')
            ->leftJoin('performances', 'program_and_projects.id', '=', 'performances.idpaps')
            ->leftJoin('success_indicators', 'program_and_projects.id', '=', 'success_indicators.idpaps')
            ->leftJoin('office_accountables', 'program_and_projects.id', '=', 'office_accountables.idpaps')
            ->leftJoinSub($ratingSub, 'ratings', 'program_and_projects.id', '=', 'ratings.idpaps')
            ->leftJoin('rating_remarks', 'program_and_projects.id', '=', 'rating_remarks.idpaps')
            ->leftJoinSub($qualitySub, 'qualities', 'program_and_projects.id', '=', 'qualities.idpaps')
            ->leftJoin('quality_remarks', 'program_and_projects.id', '=', 'quality_remarks.idpaps')
            ->leftJoinSub($timelinessSub, 'timelinesses', 'program_and_projects.id', '=', 'timelinesses.idpaps')
            ->leftJoin('timeliness_remarks', 'program_and_projects.id', '=', 'timeliness_remarks.idpaps')
            ->leftJoin('monitorings', 'program_and_projects.id', '=', 'monitorings.idpaps')
            // ->leftJoinSub($timelinessSub, 'timelinesses', 'program_and_projects.id', '=', 'timelinesses.idpaps')
            ->get()
            ->groupBy('mfo_desc');
        // dd($results);
        foreach ($results as $key => $row) {

            foreach ($row as $key => $value) {
                // dd($value['numerical_ratings']);
                $value->numerical_rating = explode(',', $value->numerical_rating);
                $value->adjectival_rating = explode(',', $value->adjectival_rating);
                $value->efficiency_quantity = explode(',', $value->efficiency_quantity);
                $value->qualities = explode(',', $value->qualities);
                $value->timeliness = explode(',', $value->timeliness);
            }
        }

        // dd($results);
        // dd($results);
        // ->map(function($item){
        //     $rating = rating::where('idpaps',$item->id)->get();
        //     return [];
        // });
        return inertia('OPCR/OPCR', [
            "data" => $results,
            "FFUNCCOD" => $office,
        ]);
    }
    public function OPCRprint(Request $request)
    {
        $mfos = MajorFinalOutput::where('FFUNCCOD', $request->id)->get()
            ->map(function ($item) use ($request) {
                $MOOE = $request->MOOE;
                $PS = $request->PS;
                $functions = $request->FUNCTION;
                $paps = ProgramAndProject::where('idmfo', $item->id)
                    ->get()->map(function ($itemp) {
                        $Output = Output::where('idpaps', $itemp->id)
                            ->get()->map(function ($item) {
                                return ["Outputs" => $item->Outputs];
                            });
                        $performance = Performance::where('idpaps', $itemp->id)
                            ->get()->map(function ($item) {
                                return ["performance" => $item->performance];
                            });
                        $success_indicator = SuccessIndicator::where('idpaps', $itemp->id)
                            ->get()->map(function ($item) {
                                return ["success_indicator" => $item->success_indicator];
                            });
                        $office = OfficeAccountable::where('idpaps', $itemp->id)
                            ->get()->map(function ($item) {
                                return ["office_accountable" => $item->office_accountable];
                            });
                        $rating = rating::where('idpaps', $itemp->id)
                            ->get()->map(function ($item) {
                                return [
                                    "numerical_rating" => $item->numerical_rating,
                                    "adjectival_rating" => $item->adjectival_rating,
                                    "efficiency_quantity" => $item->efficiency_quantity
                                ];
                            });

                        $rating_remark = RatingRemarks::where('idpaps', $itemp->id)
                            ->get()->map(function ($item) {
                                return ["rating_remarks" => $item->rating_remarks];
                            });

                        $quality = Quality::where('idpaps', $itemp->id)
                            ->get()->map(function ($item) {
                                return ["quality" => $item->quality];
                            });

                        $quality_remarks = QualityRemarks::where('idpaps', $itemp->id)
                            ->get()->map(function ($item) {
                                return ["quality_remarks" => $item->quality_remarks];
                            });

                        $timeliness = Timeliness::where('idpaps', $itemp->id)
                            ->get()->map(function ($item) {
                                return ["timeliness" => $item->timeliness];
                            });

                        $timelienss_remarks = TimelinessRemarks::where('idpaps', $itemp->id)
                            ->get()->map(function ($item) {
                                return ["timeliness_remarks" => $item->timeliness_remarks];
                            });

                        $monitor = Monitoring::where('idpaps', $itemp->id)
                            ->get()->map(function ($item) {
                                return ["monitoring" => $item->monitoring];
                            });

                        return [
                            "paps_desc" => $itemp->paps_desc,
                            "Outputs" => $Output,
                            "Performance" => $performance,
                            "Success_Indicator" => $success_indicator,
                            "Office_Accountable" => $office,
                            "Rating" => $rating,
                            "Rating_Remarks" => $rating_remark,
                            "Quality" => $quality,
                            "Quality_remarks" => $quality_remarks,
                            "Timeliness" => $timeliness,
                            "Timeliness_Remarks" => $timelienss_remarks,
                            "Monitoring" => $monitor
                        ];
                    });
                return [
                    "MOOE" => $MOOE,
                    "PS" => $PS,
                    "Function" => strtoupper($functions),
                    "mfo_desc" => $item->mfo_desc,
                    "paps" => $paps
                ];
            });

        return $mfos;
    }


    public function MFO(Request $request)
    {
        // dd($request->all());
        $functions = strtoupper($request->FUNCTION);
        $MOOE = $request->MOOE;
        $PS = $request->PS;

        $mfos = MajorFinalOutput::select(DB::raw('"' . $functions . '" as `FUNCTION`'), "mfo_desc", "id")
            ->where('FFUNCCOD', $request->id)
            ->where("id", ">", "45")
            ->get();
        return $mfos;
    }

    public function PAPS(Request $request)
    {
        $paps = ProgramAndProject::select(
            'program_and_projects.id',
            'program_and_projects.paps_desc',
            'opcr_standards.output',
            'opcr_standards.performance_measure',
            'opcr_standards.office_accountable',
            'opcr_standards.monitoring',
            'opcr_standards.prescribed_period',
            'opcr_standards.quality1',
            'opcr_standards.quality2',
            'opcr_standards.quality3',
            'opcr_standards.efficiency1',
            'opcr_standards.efficiency2',
            'opcr_standards.efficiency3',
            'opcr_standards.timeliness',

        )
            ->leftJoin('opcr_standards', 'program_and_projects.id', '=', 'opcr_standards.idpaps')
            ->where('idmfo', $request->idmfo)
            ->groupBy('program_and_projects.id')
            ->get();

        return $paps;
    }

    public function Rating(Request $request)
    {
        $rating = rating::where('idpaps', $request->idpaps)
            ->get();

        return $rating;
    }

    public function Quality(Request $request)
    {
        $quality = Quality::select("id", "quality", "idpaps")->where('idpaps', $request->idpaps)
            ->get();

        return $quality;
    }

    public function Timeliness(Request $request)
    {
        $timeliness = Timeliness::select("id", "timeliness", "idpaps")->where('idpaps', $request->idpaps)
            ->get();

        return $timeliness;
    }

    public function viewOPCR(Request $request)
    {
        $link = $request->link;
        $link = str_replace("abcdefghijklo534gdmoivndfigudfhgdyfugdhfugidhfuigdhfiugmccxcxcxzczczxczxczxcxzc5fghjkliuhghghghaaa555l&&&&-", "", $link);

        $link = "http://" . $link;
        // dd($link);
        // dd($link);
        return inertia('OPCR/Form/Print', [
            "link" => $link,
        ]);
    }
}
