import styled from "styled-components";

const Trusted = () => {
  return (
    <Wrapper className="brand-section">
      <div className="container">
        <h3>Trusted By 1000+ Companies</h3>
        <div className="brand-section-slider">
          {/* my 1st img  */}
          <div className="slide">
            <img
              src="https://statics.globant.com/production/public/2022-11/Gooogle-logo_1.svg"
              alt="trusted-brand1"
            />
          </div>
          <div className="slide">
            <img
              src="https://statics.globant.com/production/public/2022-11/EA-logo_1.svg"
              alt="trusted-brand2"
            />
          </div>
          <div className="slide">
            <img
              src="https://statics.globant.com/production/public/2022-11/Linkedin-logo_0.svg"
              alt="trusted-brand3"
            />
          </div>
          <div className="slide">
            <img
              src="https://statics.globant.com/production/public/2022-11/BE29AC37-8035-4E89-B239-6EC48F5B2AD9.svg"
              alt="trusted-brand4"
            />
          </div>
          <div className="slide">
            <img
              src="https://statics.globant.com/production/public/2022-11/Group%208000.svg"
              alt="trusted-brand5"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;

export default Trusted;
