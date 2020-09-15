/**
 * External dependencies
 */
import React, { ReactNode } from 'react';

/**
 * WordPress dependencies
 */
import { Card, CardHeader, CardBody, Flex, FlexItem } from '@wordpress/components';

/**
 * Internal dependencies
 */
import AsyncLoad from 'components/async-load';

import './style.scss';

const ExampleComponent = ( { name, children }: { name: string; children: ReactNode } ) => (
	<FlexItem>
		<Card isElevated style={ { margin: '1rem 0' } }>
			<CardHeader>
				<strong>{ name }</strong>
			</CardHeader>
			<CardBody>{ children }</CardBody>
		</Card>
	</FlexItem>
);

const WordPressComponentsGallery = () => (
	<>
		<h1 className="wordpress-components-gallery__heading">
			The kitchen sink of WordPress components from the <code>@wordpress/components</code> package.
		</h1>
		<Flex justify="flex-start" gap={ 4 } style={ { flexWrap: 'wrap' } }>
			<ExampleComponent name="Alignment Matrix Control">
				<AsyncLoad require="./alignment-matrix-control" />
			</ExampleComponent>

			<ExampleComponent name="Angle Picker Control">
				<AsyncLoad require="./angle-picker-control" />
			</ExampleComponent>

			<ExampleComponent name="Animate">
				<AsyncLoad require="./animate" />
			</ExampleComponent>

			<ExampleComponent name="Autocomplete">
				<AsyncLoad require="./autocomplete" />
			</ExampleComponent>

			<ExampleComponent name="Base Control">
				<AsyncLoad require="./base-control" />
			</ExampleComponent>

			<ExampleComponent name="Box Control">
				<AsyncLoad require="./box-control" />
			</ExampleComponent>

			<ExampleComponent name="Button">
				<AsyncLoad require="./button" />
			</ExampleComponent>

			<ExampleComponent name="Button Group">
				<AsyncLoad require="./button-group" />
			</ExampleComponent>

			<ExampleComponent name="Card">
				<AsyncLoad require="./card" />
			</ExampleComponent>

			<ExampleComponent name="Checkbox Control">
				<AsyncLoad require="./checkbox-control" />
			</ExampleComponent>

			<ExampleComponent name="Clipboard Button">
				<AsyncLoad require="./clipboard-button" />
			</ExampleComponent>

			<ExampleComponent name="Color Palette">
				<AsyncLoad require="./color-palette" />
			</ExampleComponent>

			<ExampleComponent name="Custom Select Control">
				<AsyncLoad require="./custom-select-control" />
			</ExampleComponent>

			<ExampleComponent name="Date Time Picker">
				<AsyncLoad require="./date-time-picker" />
			</ExampleComponent>

			<ExampleComponent name="Disabled">
				<AsyncLoad require="./disabled" />
			</ExampleComponent>

			<ExampleComponent name="Draggable">
				<AsyncLoad require="./draggable" />
			</ExampleComponent>

			<ExampleComponent name="Dropdown Menu">
				<AsyncLoad require="./dropdown-menu" />
			</ExampleComponent>

			<ExampleComponent name="External Link">
				<AsyncLoad require="./external-link" />
			</ExampleComponent>

			<ExampleComponent name="Focal Point Picker">
				<AsyncLoad require="./focal-point-picker" />
			</ExampleComponent>

			<ExampleComponent name="Font Size Picker">
				<AsyncLoad require="./font-size-picker" />
			</ExampleComponent>

			<ExampleComponent name="Form File Upload">
				<AsyncLoad require="./form-file-upload" />
			</ExampleComponent>

			<ExampleComponent name="Form Toggle">
				<AsyncLoad require="./form-toggle" />
			</ExampleComponent>

			<ExampleComponent name="Form Token Field">
				<AsyncLoad require="./form-token-field" />
			</ExampleComponent>

			<ExampleComponent name="Guide">
				<AsyncLoad require="./guide" />
			</ExampleComponent>

			<ExampleComponent name="Panel">
				<AsyncLoad require="./panel" />
			</ExampleComponent>

			<ExampleComponent name="Placeholder">
				<AsyncLoad require="./placeholder" />
			</ExampleComponent>

			<ExampleComponent name="Query Controls">
				<AsyncLoad require="./query-controls" />
			</ExampleComponent>

			<ExampleComponent name="Radio">
				<AsyncLoad require="./radio" />
			</ExampleComponent>

			<ExampleComponent name="Radio Control">
				<AsyncLoad require="./radio-control" />
			</ExampleComponent>

			<ExampleComponent name="Resizable Box">
				<AsyncLoad require="./resizable-box" />
			</ExampleComponent>

			<ExampleComponent name="Slot-Fill">
				<AsyncLoad require="./slot-fill" />
			</ExampleComponent>

			<ExampleComponent name="Snackbar">
				<AsyncLoad require="./snackbar" />
			</ExampleComponent>

			<ExampleComponent name="Spinner">
				<AsyncLoad require="./spinner" />
			</ExampleComponent>

			<ExampleComponent name="Tab Panel">
				<AsyncLoad require="./tab-panel" />
			</ExampleComponent>

			<ExampleComponent name="Text">
				<AsyncLoad require="./text" />
			</ExampleComponent>

			<ExampleComponent name="Text Control">
				<AsyncLoad require="./text-control" />
			</ExampleComponent>

			<ExampleComponent name="Textarea Control">
				<AsyncLoad require="./textarea-control" />
			</ExampleComponent>

			<ExampleComponent name="Tip">
				<AsyncLoad require="./tip" />
			</ExampleComponent>

			<ExampleComponent name="Toggle Control">
				<AsyncLoad require="./toggle-control" />
			</ExampleComponent>

			<ExampleComponent name="Toolbar">
				<AsyncLoad require="./toolbar" />
			</ExampleComponent>

			<ExampleComponent name="Tooltip">
				<AsyncLoad require="./tooltip" />
			</ExampleComponent>

			<ExampleComponent name="Tree Grid">
				<AsyncLoad require="./tree-grid" />
			</ExampleComponent>

			<ExampleComponent name="Tree Select">
				<AsyncLoad require="./tree-select" />
			</ExampleComponent>

			<ExampleComponent name="Visually Hidden">
				<AsyncLoad require="./visually-hidden" />
			</ExampleComponent>
		</Flex>
	</>
);

export default WordPressComponentsGallery;
