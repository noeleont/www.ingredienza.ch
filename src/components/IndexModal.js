import React from 'react';
import Modal from 'react-modal'
import Img from 'gatsby-image'
import { connect } from 'react-redux';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    transform             : 'translate(-50%, -50%)',
  }
};

const IndexModal = ({image, modalIsOpen, modalClose}) => (
  <Modal
      isOpen={modalIsOpen}
      onRequestClose={modalClose}
      contentLabel=""
      style={customStyles}
  >
    { image ? <Img fluid={image.childImageSharp.fluid} /> : <div /> }
    <strong>
      Es gibt keinen Grund, auf Ihre Lieblingsteigwaren zu verzichten.
      Wir haben für Sie von Montag – Freitag von 8 – 16 Uhr geöffnet
    </strong>
    <p>
      Neben unseren praktischen Pasta-Boxen à 400gr (2-3 Portionen)
      können auch Sie, als Privatperson bei uns Gastro-Einheiten
      à2kg oder 3kg zu Gastropreisen kaufen – wie die Profis!
      Lassen Sie sich in unserem Fabrik-Laden an der Güterstrasse oder
      auf unserer Website von unserem grossen Sortiment inspirieren.
      Wenn Sie nicht persönlich vorbeikommen können, beliefern wir Sie
      bis auf weiteres in Bern und nächster Umgebung ab einem 
      Warenwert von Fr. 50.-
    </p>
    <p>
      Bei Fragen oder für Bestellungen erreichen Sie uns am besten
      telefonisch 031 382 42 42 oder per Mail info@ingredienza.ch
      Wir sagen Danke für Ihre Unterstützung!
      Ihr Ingredienza-Team
      Unter folgendem Link finden Sie weitere Geschäfte die unsere
      Pasta im Offenverkauf oder als tiefgekühlte Pasta-Boxen verkaufen.
    </p>
    <a style={{ cursor: 'pointer', }} onClick={modalClose} aria-label="Close Pasta Modal">&times;</a>
  </Modal>
); 

const mapStateToProps = ({ indexModalIsOpen }) => {
  return { modalIsOpen: indexModalIsOpen }
}

const mapDispatchToProps = dispatch => {
  return { modalClose: () => dispatch({ type: `CLOSE_INDEX_MODAL` }) }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexModal);
