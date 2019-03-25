import CMS from 'netlify-cms'
import React from 'react'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerPreviewTemplate('index', IndexPagePreview)

CMS.registerEditorComponent({
  // Internal id of the component
  id: "pdfFile",
  // Visible label
  label: "Pdf Datei",
  // Fields the user need to fill out when adding an instance of the component
  fields: [
    {name: 'path', label: 'Dateipfad', widget: 'file'},
    {name: 'alt', label: 'Text', widget: 'string'},
   ],
  // Pattern to identify a block as being an instance of this component
  pattern: /^\[(\S+)\]\((\S+)\)$/,
  // Function to extract data elements from the regexp match
  fromBlock: function(match) {
    return {
      alt: match[1],
      path: match[2]
    };
  },
  // Function to create a text block from an instance of this component
  // TODO: replace with string literal
  toBlock: function(obj) {
    return '[' + obj.alt + '](' + obj.path + ')';
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function(obj) {
    return (
      <span style="border-bottom: .1rem solid rgba(0,0,0,.35)">[{obj.alt}]({obj.path})</span>
    );
  }
});
