import React from "react";
import styled from "styled-components";

const Infos = styled.div`
  width: 300px;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 1fr 3fr;
      grid-template-columns: 1fr 3fr;
  -ms-grid-rows: auto auto auto;
      grid-template-rows: auto auto auto; 
`;

const TelInfo = styled.div`
	-ms-grid-row: 1;
  grid-row: 1;  

  -ms-grid-column: 1;
  grid-column: 1;
`;

const TelContent = styled.div`
	-ms-grid-row: 1;
  grid-row: 1;  

	-ms-grid-column: 2;
  -ms-grid-column-span: 2;
  grid-column: 2 / 4;
`;

const FaxInfo = styled.div`
	-ms-grid-row: 2;
  grid-row: 2;  

  -ms-grid-column: 1;
  grid-column: 1;
`;

const FaxContent = styled.div`
	-ms-grid-row: 2;
  grid-row: 2;  

	-ms-grid-column: 2;
  -ms-grid-column-span: 2;
  grid-column: 2 / 4;
`;

const MailInfo = styled.div`
	-ms-grid-row: 3;
  grid-row: 3;  

  -ms-grid-column: 1;
  grid-column: 1;
`;

const MailContent = styled.div`
	-ms-grid-row: 3;
  grid-row: 3;  

	-ms-grid-column: 2;
  -ms-grid-column-span: 2;
  grid-column: 2 / 4;
`;


	

const Contact = () => (
  <div>
    Ingredienza
    <br />
    Die Teigwaren-Manufaktur GmbH <br />
    Rolf Thalheim
    <br />
    Güterstrasse 7<br />
    CH-3008 Bern
    <br />
    <br />
		<Infos>
			<TelInfo>
				Tel:
			</TelInfo>
			<FaxInfo>
				Fax:
			</FaxInfo>
			<MailInfo>
				Mail:
			</MailInfo>
      <TelContent>
        +41 (0)31 382 42 42
      </TelContent>
			<FaxContent>
        +41 (0)31 382 49 05
      </FaxContent>
			<MailContent>
        <a
          href="mailto:info@ingredienza.ch?subject=Kontakt%20Ingredienza.ch"
        >
          info@ingredienza.ch
        </a>
      </MailContent>
		</Infos>
  </div>
)

export default Contact;
