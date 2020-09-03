/**
 * External dependencies
 */
const fs = require( 'fs' ); // eslint-disable-line import/no-nodejs-modules
const path = require( 'path' ); // eslint-disable-line import/no-nodejs-modules

const sections = [
	{
		name: 'root',
		paths: [ '/' ],
		module: 'wp-calypso-client/root',
		group: 'root',
		enableLoggedOut: true,
	},
	{
		name: 'sites',
		paths: [ '/sites' ],
		module: 'wp-calypso-client/my-sites',
		group: 'sites',
	},
	{
		name: 'customize',
		paths: [ '/customize' ],
		module: 'wp-calypso-client/my-sites/customize',
		group: 'sites',
	},
	{
		name: 'me',
		paths: [ '/me' ],
		module: 'wp-calypso-client/me',
		group: 'me',
	},
	{
		name: 'account',
		paths: [ '/me/account' ],
		module: 'wp-calypso-client/me/account',
		group: 'me',
	},
	{
		name: 'account-close',
		paths: [ '/me/account/close', '/me/account/closed' ],
		module: 'wp-calypso-client/me/account-close',
		group: 'me',
	},
	{
		name: 'activity',
		paths: [ '/activity-log' ],
		module: 'wp-calypso-client/my-sites/activity',
		group: 'sites',
	},
	{
		name: 'security',
		paths: [ '/me/security' ],
		module: 'wp-calypso-client/me/security',
		group: 'me',
	},
	{
		name: 'privacy',
		paths: [ '/me/privacy' ],
		module: 'wp-calypso-client/me/privacy',
		group: 'me',
	},
	{
		name: 'purchases',
		paths: [ '/me/purchases', '/purchases', '/me/billing', '/payment-methods/add-credit-card' ],
		module: 'wp-calypso-client/me/purchases',
		group: 'me',
	},
	{
		name: 'notification-settings',
		paths: [ '/me/notifications' ],
		module: 'wp-calypso-client/me/notification-settings',
		group: 'me',
	},
	{
		name: 'site-blocks',
		paths: [ '/me/site-blocks' ],
		module: 'wp-calypso-client/me/site-blocks',
		group: 'me',
	},
	{
		name: 'concierge',
		paths: [ '/me/concierge' ],
		module: 'wp-calypso-client/me/concierge',
		group: 'me',
	},
	{
		name: 'media',
		paths: [ '/media' ],
		module: 'wp-calypso-client/my-sites/media',
		group: 'sites',
	},
	{
		name: 'people',
		paths: [ '/people' ],
		module: 'wp-calypso-client/my-sites/people',
		group: 'sites',
	},
	{
		name: 'plugins',
		paths: [ '/plugins' ],
		module: 'wp-calypso-client/my-sites/plugins',
		group: 'sites',
	},
	{
		name: 'pages',
		paths: [ '/pages' ],
		module: 'wp-calypso-client/my-sites/pages',
		group: 'sites',
	},
	{
		name: 'posts',
		paths: [ '/posts' ],
		module: 'wp-calypso-client/my-sites/posts',
		group: 'sites',
	},
	{
		name: 'settings-performance',
		paths: [ '/settings/performance' ],
		module: 'wp-calypso-client/my-sites/site-settings/settings-performance',
		group: 'sites',
	},
	{
		name: 'settings-writing',
		paths: [ '/settings/writing', '/settings/taxonomies', '/settings/podcasting' ],
		module: 'wp-calypso-client/my-sites/site-settings/settings-writing',
		group: 'sites',
	},
	{
		name: 'settings-discussion',
		paths: [ '/settings/discussion' ],
		module: 'wp-calypso-client/my-sites/site-settings/settings-discussion',
		group: 'sites',
	},
	{
		name: 'settings-security',
		paths: [ '/settings/security' ],
		module: 'wp-calypso-client/my-sites/site-settings/settings-security',
		group: 'sites',
	},
	{
		name: 'settings-jetpack',
		paths: [ '/settings/jetpack' ],
		module: 'wp-calypso-client/my-sites/site-settings/settings-jetpack',
		group: 'sites',
	},
	{
		name: 'settings',
		paths: [ '/settings' ],
		module: 'wp-calypso-client/my-sites/site-settings',
		group: 'sites',
	},
	{
		name: 'marketing',
		paths: [ '/marketing', '/sharing' ],
		module: 'wp-calypso-client/my-sites/marketing',
		group: 'sites',
	},
	{
		name: 'jetpack-connect',
		paths: [ '/jetpack' ],
		module: 'wp-calypso-client/jetpack-connect',
		enableLoggedOut: true,
	},
	{
		name: 'purchase-product',
		paths: [ '/purchase-product' ],
		module: 'wp-calypso-client/my-sites/purchase-product',
		enableLoggedOut: true,
	},
	{
		name: 'signup',
		paths: [ '/start' ],
		module: 'wp-calypso-client/signup',
		enableLoggedOut: true,
		isomorphic: true,
	},
	{
		name: 'stats',
		paths: [ '/stats' ],
		module: 'wp-calypso-client/my-sites/stats',
		group: 'sites',
		trackLoadPerformance: true,
	},
	{
		name: 'google-my-business',
		paths: [ '/google-my-business' ],
		module: 'wp-calypso-client/my-sites/google-my-business',
		group: 'sites',
	},
	// Since we're using find() and startsWith() on paths, 'themes' needs to go before 'theme',
	// or it'll be falsely associated with the latter section.
	{
		name: 'themes',
		paths: [ '/themes', '/design' ],
		module: 'wp-calypso-client/my-sites/themes',
		enableLoggedOut: true,
		group: 'sites',
		isomorphic: true,
		title: 'Themes',
	},
	{
		name: 'theme',
		paths: [ '/theme' ],
		module: 'wp-calypso-client/my-sites/theme',
		enableLoggedOut: true,
		group: 'sites',
		isomorphic: true,
		title: 'Themes',
		trackLoadPerformance: true,
	},
	{
		name: 'domains',
		paths: [ '/domains' ],
		module: 'wp-calypso-client/my-sites/domains',
		group: 'sites',
	},
	{
		name: 'email',
		paths: [ '/email' ],
		module: 'wp-calypso-client/my-sites/email',
		group: 'sites',
	},
	{
		name: 'checkout',
		paths: [ '/checkout' ],
		module: 'wp-calypso-client/my-sites/checkout',
		group: 'sites',
		enableLoggedOut: true,
	},
	{
		name: 'plans',
		paths: [ '/plans' ],
		module: 'wp-calypso-client/my-sites/plans',
		group: 'sites',
		trackLoadPerformance: true,
	},
	{
		name: 'accept-invite',
		paths: [ '/accept-invite' ],
		module: 'wp-calypso-client/my-sites/invites',
		enableLoggedOut: true,
	},
	{
		name: 'earn',
		paths: [ '/earn', '/ads' ],
		module: 'wp-calypso-client/my-sites/earn',
		group: 'sites',
	},
	{
		name: 'mailing-lists',
		paths: [ '/mailing-lists/unsubscribe' ],
		module: 'wp-calypso-client/mailing-lists',
		enableLoggedOut: true,
		group: 'me',
	},
	{
		name: 'post-editor',
		paths: [ '/post', '/page', '/edit' ],
		module: 'wp-calypso-client/post-editor',
		group: 'editor',
	},
	// this MUST be the first section for /read paths so subsequent sections under /read can override settings
	{
		name: 'reader',
		paths: [ '/read' ],
		module: 'wp-calypso-client/reader',
		group: 'reader',
		trackLoadPerformance: true,
	},
	{
		name: 'reader',
		paths: [ '/read/feeds/[^\\/]+', '/read/blogs/[^\\/]+', '/read/a8c', '/recommendations' ],
		module: 'wp-calypso-client/reader',
		group: 'reader',
		trackLoadPerformance: true,
	},
	{
		name: 'reader',
		paths: [ '/read/feeds/[^\\/]+/posts/[^\\/]+', '/read/blogs/[^\\/]+/posts/[^\\/]+' ],
		module: 'wp-calypso-client/reader/full-post',
		group: 'reader',
		trackLoadPerformance: true,
	},
	{
		name: 'reader',
		paths: [ '/discover' ],
		module: 'wp-calypso-client/reader/discover',
		group: 'reader',
		trackLoadPerformance: true,
	},
	{
		name: 'reader',
		paths: [ '/following' ],
		module: 'wp-calypso-client/reader/following',
		group: 'reader',
	},
	{
		name: 'reader',
		paths: [ '/tags', '/tag' ],
		module: 'wp-calypso-client/reader/tag-stream',
		group: 'reader',
		trackLoadPerformance: true,
	},
	{
		name: 'reader',
		paths: [ '/activities' ],
		module: 'wp-calypso-client/reader/liked-stream',
		group: 'reader',
		trackLoadPerformance: true,
	},
	{
		name: 'reader',
		paths: [ '/read/search', '/recommendations' ],
		module: 'wp-calypso-client/reader/search',
		group: 'reader',
		trackLoadPerformance: true,
	},
	{
		name: 'reader',
		paths: [ '/read/list' ],
		module: 'wp-calypso-client/reader/list',
		group: 'reader',
	},
	{
		name: 'reader',
		paths: [ '/read/conversations' ],
		module: 'wp-calypso-client/reader/conversations',
		group: 'reader',
		trackLoadPerformance: true,
	},
	{
		name: 'help',
		paths: [ '/help' ],
		module: 'wp-calypso-client/me/help',
		enableLoggedOut: true,
		group: 'me',
	},
	{
		name: 'auth',
		paths: [ '/oauth-login', '/authorize', '/api/oauth/token' ],
		module: 'wp-calypso-client/auth',
		enableLoggedOut: true,
	},
	{
		name: 'posts-custom',
		paths: [ '/types' ],
		module: 'wp-calypso-client/my-sites/types',
		group: 'sites',
	},
	{
		name: 'happychat',
		paths: [ '/me/chat' ],
		module: 'wp-calypso-client/me/happychat',
		group: 'me',
	},
	{
		name: 'comments',
		paths: [ '/comments', '/comment' ],
		module: 'wp-calypso-client/my-sites/comments',
		group: 'sites',
	},
	{
		name: 'preview',
		paths: [ '/view' ],
		module: 'wp-calypso-client/my-sites/preview',
		group: 'sites',
	},
	{
		name: 'domain-connect-authorize',
		paths: [ '/domain-connect' ],
		module: 'wp-calypso-client/my-sites/domains/domain-management/domain-connect',
	},
	{
		name: 'gutenberg-editor',
		paths: [ '/block-editor', '/site-editor' ],
		module: 'wp-calypso-client/gutenberg/editor',
		group: 'gutenberg',
		trackLoadPerformance: true,
	},
	// This next section exists only temporarily as a dirty trick to test Gutenberg in Calypso
	// without creating a whole new section for it. It allows us to apply specific styles to
	// the `gutenberg-editor` section without affective the "without-iframe" route which will
	// appear as a separate section.
	{
		name: 'gutenberg-in-calypso',
		paths: [ '/without-iframe/block-editor' ],
		module: 'wp-calypso-client/gutenberg/editor',
		group: 'gutenberg',
	},
	{
		name: 'import',
		paths: [ '/import' ],
		module: 'wp-calypso-client/my-sites/importer',
		group: 'sites',
	},
	{
		name: 'export',
		paths: [ '/export' ],
		module: 'wp-calypso-client/my-sites/exporter',
		group: 'sites',
	},
	{
		name: 'migrate',
		paths: [ '/migrate' ],
		module: 'wp-calypso-client/my-sites/migrate',
		group: 'sites',
	},
	{
		name: 'devdocs',
		paths: [ '/devdocs' ],
		module: 'wp-calypso-client/devdocs',
		enableLoggedOut: true,
	},
	{
		name: 'home',
		paths: [ '/home' ],
		module: 'wp-calypso-client/my-sites/customer-home',
		group: 'sites',
		trackLoadPerformance: true,
	},
	{
		name: 'hosting',
		paths: [ '/hosting-config' ],
		module: 'wp-calypso-client/my-sites/hosting',
		group: 'sites',
	},
	{
		name: 'backup',
		paths: [ '/backup' ],
		module: 'wp-calypso-client/my-sites/backup',
		group: 'sites',
	},
	{
		name: 'scan',
		paths: [ '/scan' ],
		module: 'wp-calypso-client/my-sites/scan',
		group: 'sites',
	},
	{
		name: 'jetpack-cloud',
		paths: [ '/', '/landing', '/settings', '/oauth-override' ],
		module: 'wp-calypso-client/landing/jetpack-cloud',
		group: 'jetpack-cloud',
		enableLoggedOut: true,
	},
	{
		name: 'jetpack-cloud-settings',
		paths: [ '/settings' ],
		module: 'wp-calypso-client/landing/jetpack-cloud/sections/settings',
		group: 'jetpack-cloud',
	},
	{
		name: 'jetpack-cloud-auth',
		paths: [ '/connect', '/connect/oauth/token' ],
		module: 'wp-calypso-client/landing/jetpack-cloud/sections/auth',
		group: 'jetpack-cloud',
		enableLoggedOut: true,
	},
	{
		name: 'jetpack-cloud-pricing',
		paths: [ '/pricing' ],
		module: 'wp-calypso-client/landing/jetpack-cloud/sections/pricing',
		group: 'jetpack-cloud',
		enableLoggedOut: true,
	},
];

for ( const extension of require( './extensions' ) ) {
	try {
		const pkgPath = path.join( __dirname, 'extensions', extension, 'package.json' );
		const pkg = JSON.parse( fs.readFileSync( pkgPath ) );
		sections.push( {
			...pkg.section,
			envId: pkg.env_id,
		} );
	} catch {}
}

module.exports = sections;
