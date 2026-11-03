<?php

namespace App\Services;

use Illuminate\Support\Collection;
use Illuminate\Support\Str;

class RevisionPlanSummaryService
{
    public function summarize(Collection $plans): array
    {
        $summary = [
            'sources' => [
                'dev' => $this->emptyTotals(),
                'ldrrmf' => $this->emptyTotals(),
                'other' => $this->emptyTotals(),
                'gen_fund' => $this->emptyTotals(),
            ],
            'gen_fund_sectors' => [
                'General Public Services Sector' => $this->emptyTotals(),
                'Economic Services' => $this->emptyTotals(),
                'Social Services Sector' => $this->emptyTotals(),
                'Other Services' => $this->emptyTotals(),
            ],
        ];

        foreach ($plans as $plan) {
            $sourceOfFunds = Str::lower(trim(optional(optional($plan)->paps)->source_of_funds ?? ''));
            if (!array_key_exists($sourceOfFunds, $summary['sources'])) {
                $sourceOfFunds = 'other';
            }

            $budget = collect($plan->budget ?? []);
            $totalMooe = $budget
                ->where('category', 'Maintenance, Operating, and Other Expenses')
                ->sum('amount');
            $totalPs = $budget->where('category', 'Personnel Services')->sum('amount');
            $totalCo = $budget->where('category', 'Capital Outlay')->sum('amount');
            $totalFe = $budget->where('category', 'Financial Expenses')->sum('amount');

            $summary['sources'][$sourceOfFunds]['total_mooe'] += $totalMooe;
            $summary['sources'][$sourceOfFunds]['total_ps'] += $totalPs;
            $summary['sources'][$sourceOfFunds]['total_co'] += $totalCo;
            $summary['sources'][$sourceOfFunds]['total_fe'] += $totalFe;

            if ($sourceOfFunds === 'gen_fund') {
                $sector = trim(optional(optional($plan)->paps)->sector ?? '');
                $sectorKey = array_key_exists($sector, $summary['gen_fund_sectors'])
                    ? $sector
                    : 'Other Services';

                $summary['gen_fund_sectors'][$sectorKey]['total_mooe'] += $totalMooe;
                $summary['gen_fund_sectors'][$sectorKey]['total_ps'] += $totalPs;
                $summary['gen_fund_sectors'][$sectorKey]['total_co'] += $totalCo;
                $summary['gen_fund_sectors'][$sectorKey]['total_fe'] += $totalFe;
            }
        }

        return $summary;
    }

    protected function emptyTotals(): array
    {
        return [
            'total_mooe' => 0.0,
            'total_ps' => 0.0,
            'total_co' => 0.0,
            'total_fe' => 0.0,
        ];
    }
}
