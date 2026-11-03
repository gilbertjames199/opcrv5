<?php

namespace App\Http\Controllers;

use App\Models\AccountAccess;
use App\Models\FFUNCCOD;
use App\Models\MajorFinalOutput;
use App\Models\OrganizationalGoal;
use App\Models\Outcome;
use App\Models\ProgramAndProject;
use App\Models\Sector;
use App\Models\Sectoral;
use App\Models\SocietalGoal;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Mockery\Undefined;
use SimpleXMLElement;

class LogFrameController extends Controller
{
    protected $model;
    public function __construct(AccountAccess $model)
    {
        $this->model = $model;
    }
    public function index(Request $request)
    {
        //dd('logframe');
        //dd(auth()->user()->recid);
        // $accounts = $this->model->where('iduser',auth()->user()->recid)
        //             ->with('func')->get();
        $afmsDb = getDB2Name();
        // dd($afmsDb);
        $functions = $this->model
            ->select('ff.FFUNCCOD', 'FFUNCTION', 'department_code')
            ->join(DB::raw("{$afmsDb}.functions ff"), 'ff.FFUNCCOD', '=', 'accountaccess.ffunccod');


        if (auth()->user()->recid !== 545) {
            $functions = clone ($functions)->where('iduser', auth()->user()->recid);
        }
        $functions = clone ($functions)
            ->where('FFUNCTION', 'LIKE', '%Office%')
            ->distinct('FFUNCCOD')->orderBy('FFUNCTION')->get()->map(function ($item) {
                $FFUNCTION = trim($item->FFUNCTION);
                return [
                    'FFUNCCOD' => $item->FFUNCCOD,
                    'FFUNCTION' => $FFUNCTION,
                    'department_code' => $item->department_code,
                ];
            });
        // $acc_access = $this->model->where('FFUNCCOD','1031')->get()->pluck('iduser');
        // dd($acc_access);
        //dd($functions);
        //dd($accounts); 1121
        //$functions = $accounts->pluck('func');
        //$fa = FFUNCCOD::where('FFUNCCOD','1121')->with('acc')->get();
        //dd($fa[0]->FFUNCCOD." gaccounce ".$accounts[0]->ffunccod);
        //dd($fa);
        return inertia('LogFrame/Index', [
            "data" => $functions,
        ]);
    }

    public function showlog($FFUNCCOD)
    {
        // dd($FFUNCCOD);
        // === null
        if ($FFUNCCOD == null || $FFUNCCOD == "" || $FFUNCCOD == "null") {
            // dd($FFUNCCOD . " inside !FFUNCCOD is null");

            $ffunccody = auth()->user()->office;
            // dd("ffunccody: " . $ffunccody);
            if ($ffunccody != null) {
                // dd("Null ang ffunccody333 ");
                // dd(auth()->user()->office);
                $FFUNCCOD = $ffunccody;
                // dd('FFUNCCOD: ' . $FFUNCCOD);
            }
        }
        $soc_goal = SocietalGoal::get();
        $sec_goal_econ = Sectoral::Join('sectors', 'sectors.id', 'sectoral_goals.sector')
            ->where('sectors.sector_name', 'LIKE', '%Econ%')
            ->get();
        $sec_goal_soc = Sectoral::Join('sectors', 'sectors.id', 'sectoral_goals.sector')
            ->where('sectors.sector_name', 'LIKE', '%Social%')
            ->get();
        $sec_goal_gen = Sectoral::Join('sectors', 'sectors.id', 'sectoral_goals.sector')
            ->where('sectors.sector_name', 'LIKE', '%General%')
            ->get();
        $sec_goal = Sectoral::Join('sectors', 'sectors.id', 'sectoral_goals.sector')
            ->where('FFUNCCOD', $FFUNCCOD)
            ->get();
        // dd($sec_goal->pluck('goal_description'));
        $organizational = OrganizationalGoal::where('FFUNCCOD', $FFUNCCOD)->get();
        if ($FFUNCCOD) {
            $mfos = MajorFinalOutput::where('FFUNCCOD', $FFUNCCOD)
                ->with('paps')
                ->where('id', '>', '50')
                ->whereNull('from_excel')
                ->get();
            // dd($FFUNCCOD);
        }

        $functions = FFUNCCOD::where('FFUNCCOD', $FFUNCCOD)->get();
        $office = $functions->pluck('FFUNCTION');

        return inertia('LogFrame/logframe', [
            "societal" => $soc_goal,
            "sec_econ" => $sec_goal_econ,
            "sec_social" => $sec_goal_soc,
            "sec_general" => $sec_goal_gen,
            "organizational" => $organizational,
            "sec_goal" => $sec_goal,
            "mfos" => $mfos,
            "office" => $office[0],
            "FFUNCCOD" => $FFUNCCOD,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);


        //dd($sec_goal_econ);
    }

    public function printLog($FFUNCCOD)
    {
        $soc_goal = SocietalGoal::get();
        //econ
        $sec_goal_econ = Sectoral::Join('sectors', 'sectors.id', 'sectoral_goals.sector')
            ->where('sectors.sector_name', 'LIKE', '%Econ%')
            ->get();
        $sec_goal_soc = Sectoral::Join('sectors', 'sectors.id', 'sectoral_goals.sector')
            ->where('sectors.sector_name', 'LIKE', '%Social%')
            ->get();
        $sec_goal_gen = Sectoral::Join('sectors', 'sectors.id', 'sectoral_goals.sector')
            ->where('sectors.sector_name', 'LIKE', '%General%')
            ->get();
        $sec_goal = Sectoral::Join('sectors', 'sectors.id', 'sectoral_goals.sector')
            ->get();

        $organizational = OrganizationalGoal::where('FFUNCCOD', $FFUNCCOD)->get();

        $mfos = MajorFinalOutput::where('FFUNCCOD', $FFUNCCOD)->with('paps')->get();
        //$id= auth()->user()->recid;
        $functions = FFUNCCOD::where('FFUNCCOD', $FFUNCCOD)->get();
        $office = $functions->pluck('FFUNCTION');
        $my_object = [
            "soc_goal" =>  $soc_goal,
            "sec_goal_econ" =>  $sec_goal_econ,
            "sec_goal_soc" =>  $sec_goal_soc,
            "sec_goal_gen" =>  $sec_goal_gen,
            "sec_goal" =>  $sec_goal,
            "organizational" =>  $organizational,
            "mfos" =>  $mfos,
            "office" =>  $office,
        ];
        return $my_object;
    }
    public function printlogpublic($FFUNCCOD)
    {
        $soc_goal = SocietalGoal::get();
        //econ
        $sec_goal_econ = Sectoral::Join('sectors', 'sectors.id', 'sectoral_goals.sector')
            ->where('sectors.sector_name', 'LIKE', '%Econ%')
            ->get();
        $sec_goal_soc = Sectoral::Join('sectors', 'sectors.id', 'sectoral_goals.sector')
            ->where('sectors.sector_name', 'LIKE', '%Social%')
            ->get();
        $sec_goal_gen = Sectoral::Join('sectors', 'sectors.id', 'sectoral_goals.sector')
            ->where('sectors.sector_name', 'LIKE', '%General%')
            ->get();
        $sec_goal = Sectoral::Join('sectors', 'sectors.id', 'sectoral_goals.sector')
            ->get();

        $organizational = OrganizationalGoal::where('FFUNCCOD', $FFUNCCOD)->get();

        $mfos = MajorFinalOutput::where('FFUNCCOD', $FFUNCCOD)->with('paps')->get();
        //$id= auth()->user()->recid;
        $functions = FFUNCCOD::where('FFUNCCOD', $FFUNCCOD)->get();
        $office = $functions->pluck('FFUNCTION');
        $my_object = [
            "soc_goal" =>  $soc_goal,
            "sec_goal_econ" =>  $sec_goal_econ,
            "sec_goal_soc" =>  $sec_goal_soc,
            "sec_goal_gen" =>  $sec_goal_gen,
            "sec_goal" =>  $sec_goal,
            "organizational" =>  $organizational,
            "mfos" =>  $mfos,
            "office" =>  $office,
        ];
        return $my_object;
    }

    // public function SocGOAL(Request $request){

    //     // // dd($request->id);
    // $functions = strtoupper($request->FUNCTION);
    // $FFUNCOD = $request->id;

    // $result = DB::table('sectoral_goals as a')
    // ->select('a.id', 'a.sector', 'a.FFUNCCOD', 'a.goal_description as sectoral_description', 'c.goal_description as organizational_description', 'b.description as societal_description')
    // ->leftJoin('organizational_goals as c', 'c.FFUNCCOD', '=', 'a.FFUNCCOD')
    // ->leftJoin('societal_goals as b', function ($join) {
    //     $join->on('b.id', '=', DB::raw('(SELECT MAX(X.id) FROM societal_goals X)'));
    // })
    // ->selectRaw("'$functions' as FUNCTION")
    // ->where('a.FFUNCCOD', $FFUNCOD)
    // ->get();
    //     return $result;
    // }

    public function mfo(Request $request)
    {
        $mfos = MajorFinalOutput::select("mfo_desc", "id")->where('FFUNCCOD', $request->id)
            ->where('id', '>', '45')
            ->whereNull('from_excel')
            ->get();
        return $mfos;
    }

    public function paps(Request $request)
    {
        // dd("paps");
        // $paps = ProgramAndProject::select("paps_desc", "id", "MOV")
        //     ->where('idmfo', $request->idmfo)
        //     ->distinct("paps_desc")
        //     ->get();
        $paps = ProgramAndProject::select("paps_desc", "id", "MOV")
            ->whereIn('id', function ($query) use ($request) {
                $query->selectRaw('MIN(id)')
                    ->from('program_and_projects')
                    ->where('idmfo', $request->idmfo)
                    ->groupBy('paps_desc');
            })
            ->orderBy('program_and_projects.paps_desc', 'ASC')
            ->get();
        return $paps;
    }

    public function sectoral(Request $request)
    {
        $sectoral = Sectoral::select("goal_description as SectoralDescription", "id")
            ->where('FFUNCCOD', $request->id)
            ->get()
            ->map(function ($item) {
                // $orgg = strip_tags($item->SectoralDescription);
                $orgg = $item->SectoralDescription;
                return [
                    "SectoralDescription" => $orgg,
                    "id" => $item->id,
                ];
            });
        return $sectoral;
    }

    public function organizational(Request $request)
    {
        // DB::raw("REGEXP_REPLACE(goal_description, '<[^>]*>', '') as organizationalOutcome"),
        // dd("org");
        // "goal_description as organizationalOutcome",
        $organizational = OrganizationalGoal::select(
            "goal_description as organizationalOutcome",
            "id"
        )
            ->where('FFUNCCOD', $request->id)
            ->get()
            ->map(function ($item) {
                // $orgg = strip_tags($item->organizationalOutcome);
                return [
                    "organizationalOutcome" => $item->organizationalOutcome,
                    "id" => $item->id,
                ];
            });
        return $organizational;
    }

    public function socgoals(Request $request)
    {
        $FFUNCOD = $request->id;
        $functions = $request->FUNCTION;
        // DB::raw("REGEXP_REPLACE(description, '<[^>]*>', '') as description"),
        $socgoals = SocietalGoal::select(
            DB::raw('"' . $functions . '" as `FUNCTION`'),
            "description",
            "id"
        )
            ->selectRaw("'$FFUNCOD' as FFUNCOD")
            ->first();
        $xmlString = '';
        if ($socgoals && $socgoals->description) {
            // Load HTML content from $socgoals->description as SimpleXMLElement
            $xml = new SimpleXMLElement('<root>' . $socgoals->description . '</root>');

            // Convert SimpleXMLElement to XML string
            $xmlString = $xml->asXML();

            // Set the response content type to XML
            //return response($xmlString)->header('Content-Type', 'application/xml');
        }
        // ->map(function ($item) {
        //     $desc = strip_tags($item->description);
        //     return [
        //         "FUNCTION" => $item->FUNCTION,
        //         "description" => $desc,
        //         "id" => $item->id,
        //         "FFUNCOD" => $item->FFUNCOD
        //     ];
        // });
        $socgoals1 = [
            "FUNCTION" => $socgoals->FUNCTION,
            "description" => $xmlString,
            "id" => $socgoals->id,
            "FFUNCOD" => $socgoals->FFUNCOD
        ];
        return $socgoals1;
    }

    public function sectoralClassified(Request $request)
    {
        // dd('sectoral classified');
        // $data = Sector::select('id AS sector_id', 'sector_name')->selectRaw("'$request->id' as FFUNCOD")->get();

        $data = Sector::select(
            'sectors.id AS sector_id',
            'sectors.sector_name AS sector_name',
            'sectoral_goals.FFUNCCOD AS FFUNCOD'
        )
            ->where('sectoral_goals.FFUNCCOD', $request->id)
            ->join('sectoral_goals', 'sectoral_goals.sector', 'sectors.id')
            ->distinct('sectors.id')
            ->get();
        return $data;
    }
    public function sectorFiltered(Request $request)
    {
        // DB::raw("REGEXP_REPLACE(goal_description, '<[^>]*>', '') as SectoralDescription"))
        //"goal_description as SectoralDescription",
        // dd("sector filtered");
        $sectoral = Sectoral::select(
            "goal_description as SectoralDescription",
            "id",
            "sector"
        )
            ->where('FFUNCCOD', $request->id)
            ->where('sector', $request->sector_id)
            ->get()
            ->map(function ($item) {
                $sec_desc = $item->SectoralDescription;
                // $sec_desc = preg_replace('/<[^>]*>/', '', $sec_desc);

                // Step 2: Remove escape characters (e.g., \n)
                // $sec_desc = str_replace(["\n", "\r", "\t"], ' ', $sec_desc);

                // Step 3: Remove &nbsp; entities
                // $sec_desc = str_replace('&nbsp;', ' ', $sec_desc);
                return [
                    "SectoralDescription" => $sec_desc,
                    "id" => $item->id,
                    "sector" => $item->sector
                ];
            });
        // dd($sectoral);
        return $sectoral;
    }
}
