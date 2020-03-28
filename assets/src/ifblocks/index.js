/**
 * Block settings and meta-data
 *
 * @since       1.0.0
 * @package     ifblocks
 */

/**
 * Block dependencies
 */
import edit from './components/Edit.jsx';
import save from './components/Save.jsx';

/**
 * Internal block libraries
 */
const { _x } = wp.i18n;

/**
 * Meta-data for registering block type
 */
const name = 'ifblocks';
const title = _x( 'If Blocks', 'block title', 'ifblocks' );
const category = 'mypreview';
const icon = 'admin-generic';

/**
 * Block settings
 */
const settings = {
	title,
	supports: {
		html: false,
		customClassName: false,
	},
	edit,
	save,
};

export { name, title, category, icon, settings };
