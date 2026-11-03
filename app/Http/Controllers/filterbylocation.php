<?php

        $level_now=Auth::user()->level;
        $municipality =Auth::user()->municipality;
        $barangay=Auth::user()->barangay;
        if($level_now==="provincial"){

        }else if($level_now==="municipal"){

        }else if($level_now==="barangay"){
            
        }

        

        /*
        ->where('barangay', 'like', '%' . $barangay . '%')
        ->where('municipality', 'like', '%' . $municipality . '%')

                            ->whereNested(function($query) use ($searchItem){
                                    $query->where('lastname', 'like', '%' . $searchItem . '%')
                                        ->orWhere('firstname', 'like', '%' . $searchItem . '%');
                              });



        <td>
                                <span v-if="person_info.purok_sitio">Purok {{ person_info.purok_sitio }},</span>
                                {{ person_info.barangay }}
                            </td>*/
        DB::table('y01_personal_infos')
            ->where('y01_personal_infos.gender','LIKE','%Male%')
            ->where('y01_personal_infos.middlename','LIKE','%A%')
            ->where(function ($query) { 
                $query->where('lastname','%' . $searchItem . '%')
                        ->orWhere('firstname','LIKE','%' . $searchItem . '%');
            })
            ->get();