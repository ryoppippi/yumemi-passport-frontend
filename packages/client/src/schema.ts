import * as v from 'valibot';

export const PrefectureSchema = v.object({
	prefCode: v.number(),
	prefName: v.string(),
});
export type Prefecture = v.InferOutput<typeof PrefectureSchema>;

export const PrefecturesSchema = v.array(PrefectureSchema);

export const PrefecturesResponseSchema = v.object({
	message: v.string(),
	result: PrefecturesSchema,
});
export type PrefecturesResponse = v.InferOutput<typeof PrefecturesResponseSchema>;

export const PopulationCompositionPerYearSchema = v.object({
	boundaryYear: v.number(),
	data: v.array(v.object({
		label: v.string(),
		data: v.array(v.object({
			year: v.number(),
			value: v.number(),
			rate: v.number(),
		})),
	})),
});
export type PopulationCompositionPerYear = v.InferOutput<typeof PopulationCompositionPerYearSchema>;

export const PopulationCompositionPerYearResponseSchema = v.object({
	message: v.string(),
	result: PopulationCompositionPerYearSchema,
});
export type PopulationCompositionPerYearResponse = v.InferOutput<typeof PopulationCompositionPerYearResponseSchema>;
