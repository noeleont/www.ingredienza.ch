import React from 'react'
import PropTypes from 'prop-types'
import { DefaultPageTemplate } from '../../templates/default-page'

const DefaultPagePreview = ({ entry, getAsset }) => {
  return (
    <DefaultPageTemplate
      image={entry.getIn(['data', 'image'])}
      title={entry.getIn(['data', 'title'])}
      meta= {entry.getIn(['data', 'meta'])}
    />
  )
}

DefaultPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default DefaultPagePreview
