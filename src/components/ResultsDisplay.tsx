import { DonutChart } from './DonutChart';
import { StatsDisplay } from './StatsDisplay';

interface ResultsDisplayProps {
	unit: string;
	age: number;
	weight: number;
	height: number;
	sex: string;
	activityLvl: string;
	goal: number;
	dailyProtein: number;
	carbPercent: number;
	bmr: number;
	tdee: number;
}

export const ResultsDisplay = ({
	unit,
	age,
	weight,
	height,
	sex,
	activityLvl,
	goal,
	dailyProtein,
	carbPercent,
	bmr,
	tdee,
}: ResultsDisplayProps) => {
	const goalVal = goal * 0.01;
	console.log(goalVal);
	const calorieCount = Math.round(tdee + tdee * goalVal); // FIXME: fix these equations and put them in calculations file
	const proteinCount = dailyProtein;
	const proteinCal = 4;
	const leftover = calorieCount - proteinCount * proteinCal;
	const fatPercent = (100 - carbPercent) * 0.01;
	const gramsFat = Math.round((leftover * fatPercent) / 9);
	const gramsCarbs = Math.round((leftover * carbPercent * 0.01) / 4);

	return (
		<div className='container flex flex-col p-12 space-y-5 text-left max-h-full md:max-w-[50%]'>
			<h1 className='text-4xl mt-5 font-semibold text-center text-zinc-800'>
				Results
			</h1>
			<p className='mt-5 text-xl text-center'>
				Your BMR is <b>{bmr}</b> cal / day
			</p>
			<p className='text-xl text-center'>
				Your TDEE is <b>{tdee}</b> cal / day
			</p>
			<StatsDisplay
				calories={calorieCount}
				protein={proteinCount}
				carbs={gramsCarbs}
				fat={gramsFat}
			/>
			{/* <DonutChart
				dataset={[dailyProtein, gramsCarbs, gramsFat]}
				labels={[`${dailyProtein}g of protein`, 'Carbs', 'Fat']}
				bgColors={[
					'hsl(145deg 63% 49%)',
					'hsl(37deg 90% 51%)',
					'hsl(168deg 44% 49%)',
				]}
			/> */}
		</div>
	);
};
