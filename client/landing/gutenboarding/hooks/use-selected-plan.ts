/**
 * External dependencies
 */
import { Site } from '@automattic/data-stores';
import { useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { STORE_KEY as ONBOARD_STORE } from '../stores/onboard';
import { PLANS_STORE } from '../stores/plans';
import { usePlanRouteParam } from '../path';
import useRecommendedPlan from './use-recommended-plan';
import { isEnabled } from 'config';

export function usePlanFromPath() {
	const planPath = usePlanRouteParam();
	return useSelect( ( select ) => select( PLANS_STORE ).getPlanByPath( planPath ) );
}

export function useSelectedPlan() {
	const selectedPlan = useSelect( ( select ) => select( ONBOARD_STORE ).getPlan() );

	const recommendedPlan = useRecommendedPlan();

	const hasPaidDomain = useSelect( ( select ) => select( ONBOARD_STORE ).hasPaidDomain() );
	const hasPaidDesign = useSelect( ( select ) => select( ONBOARD_STORE ).hasPaidDesign() );

	const defaultPaidPlan = useSelect( ( select ) => select( PLANS_STORE ).getDefaultPaidPlan() );

	const planFromPath = usePlanFromPath();

	// Use recommendedPlan with priority over the plan derived from domain and design selection
	const defaultPlan =
		recommendedPlan || ( ( hasPaidDomain || hasPaidDesign ) && defaultPaidPlan ) || undefined;

	/**
	 * Plan is decided in this order
	 * 1. selected from PlansGrid (by dispatching setPlan)
	 * 2. having the plan slug in the URL
	 * 3. selecting features, a paid domain or design
	 */
	return selectedPlan || planFromPath || defaultPlan;
}

export function useHasPaidPlanFromPath() {
	const planFromPath = usePlanFromPath();
	const isPlanFree = useSelect( ( select ) => select( PLANS_STORE ).isPlanFree );
	return planFromPath && ! isPlanFree( planFromPath?.storeSlug );
}

export function useNewSiteVisibility(): Site.Visibility {
	const currentSlug = useSelectedPlan()?.storeSlug;
	const isEcommerce = useSelect( ( select ) =>
		select( PLANS_STORE ).isPlanEcommerce( currentSlug )
	);

	if ( isEcommerce ) {
		return Site.Visibility.PublicIndexed;
	} else if ( isEnabled( 'gutenboarding/public-coming-soon' ) ) {
		return Site.Visibility.PublicNotIndexed;
	}

	return Site.Visibility.Private;
}

export function useShouldRedirectToEditorAfterCheckout() {
	// The ecommerce plan follows another flow, so we shouldn't interrupt
	// it by trying to redirect to the editor.
	const currentSlug = useSelectedPlan()?.storeSlug;
	return ! useSelect( ( select ) => select( PLANS_STORE ).isPlanEcommerce( currentSlug ) );
}
