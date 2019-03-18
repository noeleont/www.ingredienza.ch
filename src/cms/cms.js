import CMS from 'netlify-cms'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import Location from '../components/Location';

CMS.registerPreviewTemplate('index', IndexPagePreview)

CMS.registerWidget('location',Location) 
