import React from 'react';
import { EmailTemplateType } from 'src/types/hr/candidate';

const HRAcceptedEmailTemplate = (props: EmailTemplateType) => {
  const { candidate } = props;
  return (
    <div>
      <div style={{ padding: '0 16px' }}>
        <img
          src="https://storage.googleapis.com/starack-admin-platform.appspot.com/logoBackgroundStarack.png"
          style={{ width: '100%' }}
        />
      </div>
      <p style={{ marginLeft: '20px', textAlign: 'left' }}>
        <span
          style={{
            color: 'rgb(29, 28, 29)',
            fontFamily: 'Slack-Lato, Slack-Fractions, appleLogo, sans-serif',
            fontStyle: 'normal',
            fontVariantLigatures: 'common-ligatures',
            fontVariantCaps: 'normal',
            fontWeight: 400,
            letterSpacing: 'normal',
            orphans: 2,
            textAlign: 'left',
            textIndent: 0,
            textTransform: 'none',
            widows: 2,
            wordSpacing: 0,
            WebkitTextStrokeWidth: 0,
            whiteSpace: 'normal',
            textDecorationThickness: 'initial',
            textDecorationStyle: 'initial',
            textDecorationColor: 'initial',
            float: 'none',
            display: 'inline !important',
            fontSize: '15px',
          }}
        >
          <strong>Dear {candidate?.name},</strong>
        </span>
      </p>
      <p style={{ marginLeft: '20px', textAlign: 'left' }}>
        <br />
        <span
          style={{
            color: 'rgb(29, 28, 29)',
            fontFamily: 'Slack-Lato, Slack-Fractions, appleLogo, sans-serif',
            fontStyle: 'normal',
            fontVariantLigatures: 'common-ligatures',
            fontVariantCaps: 'normal',
            fontWeight: 400,
            letterSpacing: 'normal',
            orphans: 2,
            textAlign: 'left',
            textIndent: 0,
            textTransform: 'none',
            widows: 2,
            wordSpacing: 0,
            WebkitTextStrokeWidth: 0,
            whiteSpace: 'normal',
            textDecorationThickness: 'initial',
            textDecorationStyle: 'initial',
            textDecorationColor: 'initial',
            float: 'none',
            display: 'inline !important',
            fontSize: '15px',
          }}
        >
          We are thrilled to welcome you as one of our new {candidate?.role} at STARACK. Your skills
          have truly impressed us, and we are excited for you to join us in working on some of the
          most exciting projects.
        </span>
        <br />
        <span
          style={{
            color: 'rgb(29, 28, 29)',
            fontFamily: 'Slack-Lato, Slack-Fractions, appleLogo, sans-serif',
            fontStyle: 'normal',
            fontVariantLigatures: 'common-ligatures',
            fontVariantCaps: 'normal',
            fontWeight: 400,
            letterSpacing: 'normal',
            orphans: 2,
            textAlign: 'left',
            textIndent: 0,
            textTransform: 'none',
            widows: 2,
            wordSpacing: 0,
            WebkitTextStrokeWidth: 0,
            whiteSpace: 'normal',
            textDecorationThickness: 'initial',
            textDecorationStyle: 'initial',
            textDecorationColor: 'initial',
            float: 'none',
            display: 'inline !important',
            fontSize: '15px',
          }}
        >
          Please meet with <strong>your manager, Justin Nguyen</strong>, in the software development
          department for your orientation, subject materials, and project details.
        </span>
        <br />
        <span
          style={{
            color: 'rgb(29, 28, 29)',
            fontFamily: 'Slack-Lato, Slack-Fractions, appleLogo, sans-serif',
            fontStyle: 'normal',
            fontVariantLigatures: 'common-ligatures',
            fontVariantCaps: 'normal',
            fontWeight: 400,
            letterSpacing: 'normal',
            orphans: 2,
            textAlign: 'left',
            textIndent: 0,
            textTransform: 'none',
            widows: 2,
            wordSpacing: 0,
            WebkitTextStrokeWidth: 0,
            whiteSpace: 'normal',
            textDecorationThickness: 'initial',
            textDecorationStyle: 'initial',
            textDecorationColor: 'initial',
            float: 'none',
            display: 'inline !important',
            fontSize: '15px',
          }}
        >
          On your first day, please bring your <strong>Identification Card</strong>
        </span>
      </p>
      <p style={{ marginLeft: '20px', textAlign: 'left' }}>
        <span
          style={{
            color: 'rgb(29, 28, 29)',
            fontFamily: 'Slack-Lato, Slack-Fractions, appleLogo, sans-serif',
            fontStyle: 'normal',
            fontVariantLigatures: 'common-ligatures',
            fontVariantCaps: 'normal',
            fontWeight: 400,
            letterSpacing: 'normal',
            orphans: 2,
            textAlign: 'left',
            textIndent: 0,
            textTransform: 'none',
            widows: 2,
            wordSpacing: 0,
            WebkitTextStrokeWidth: 0,
            whiteSpace: 'normal',
            textDecorationThickness: 'initial',
            textDecorationStyle: 'initial',
            textDecorationColor: 'initial',
            float: 'none',
            display: 'inline !important',
            fontSize: '15px',
          }}
        >
          <strong>Onboarding date: {candidate?.onboardDate}</strong>
        </span>
      </p>
      <p style={{ marginLeft: '20px', textAlign: 'left' }}>
        <span
          style={{
            color: 'rgb(29, 28, 29)',
            fontFamily: 'Slack-Lato, Slack-Fractions, appleLogo, sans-serif',
            fontStyle: 'normal',
            fontVariantLigatures: 'common-ligatures',
            fontVariantCaps: 'normal',
            fontWeight: 400,
            letterSpacing: 'normal',
            orphans: 2,
            textAlign: 'left',
            textIndent: 0,
            textTransform: 'none',
            widows: 2,
            wordSpacing: 0,
            WebkitTextStrokeWidth: 0,
            whiteSpace: 'normal',
            textDecorationThickness: 'initial',
            textDecorationStyle: 'initial',
            textDecorationColor: 'initial',
            float: 'none',
            display: 'inline !important',
            fontSize: '15px',
          }}
        >
          <strong>Office</strong>: Starack Vietnam, 20/01 Tran Quoc Hoan Street, Hanoi
        </span>
      </p>
      <p style={{ marginLeft: '20px', textAlign: 'left' }}>
        <span
          style={{
            color: 'rgb(29, 28, 29)',
            fontFamily: 'Slack-Lato, Slack-Fractions, appleLogo, sans-serif',
            fontStyle: 'normal',
            fontVariantLigatures: 'common-ligatures',
            fontVariantCaps: 'normal',
            fontWeight: 400,
            letterSpacing: 'normal',
            orphans: 2,
            textAlign: 'left',
            textIndent: 0,
            textTransform: 'none',
            widows: 2,
            wordSpacing: 0,
            WebkitTextStrokeWidth: 0,
            whiteSpace: 'normal',
            textDecorationThickness: 'initial',
            textDecorationStyle: 'initial',
            textDecorationColor: 'initial',
            float: 'none',
            display: 'inline !important',
            fontSize: '15px',
          }}
        >
          No need to bring your food, as we offer a canteen service.
        </span>
      </p>
      <p style={{ marginLeft: '20px', textAlign: 'left' }}>
        <span
          style={{
            color: 'rgb(29, 28, 29)',
            fontFamily: 'Slack-Lato, Slack-Fractions, appleLogo, sans-serif',
            fontStyle: 'normal',
            fontVariantLigatures: 'common-ligatures',
            fontVariantCaps: 'normal',
            fontWeight: 400,
            letterSpacing: 'normal',
            orphans: 2,
            textAlign: 'left',
            textIndent: 0,
            textTransform: 'none',
            widows: 2,
            wordSpacing: 0,
            WebkitTextStrokeWidth: 0,
            whiteSpace: 'normal',
            textDecorationThickness: 'initial',
            textDecorationStyle: 'initial',
            textDecorationColor: 'initial',
            float: 'none',
            display: 'inline !important',
            fontSize: '15px',
          }}
        >
          We look forward to your contributions to the success of Starack. Should you need any
          information, feel free to contact me anytime.
        </span>
      </p>
      <p style={{ marginLeft: '20px', textAlign: 'left' }}>
        <span
          style={{
            color: 'rgb(29, 28, 29)',
            fontFamily: 'Slack-Lato, Slack-Fractions, appleLogo, sans-serif',
            fontStyle: 'normal',
            fontVariantLigatures: 'common-ligatures',
            fontVariantCaps: 'normal',
            fontWeight: 400,
            letterSpacing: 'normal',
            orphans: 2,
            textAlign: 'left',
            textIndent: 0,
            textTransform: 'none',
            widows: 2,
            wordSpacing: 0,
            WebkitTextStrokeWidth: 0,
            whiteSpace: 'normal',
            textDecorationThickness: 'initial',
            textDecorationStyle: 'initial',
            textDecorationColor: 'initial',
            float: 'none',
            display: 'inline !important',
            fontSize: '15px',
          }}
        >
          Wishing you a bright future and a great experience with us!
        </span>
      </p>
      <p style={{ marginLeft: '20px', textAlign: 'left' }}>
        <span
          style={{
            color: 'rgb(29, 28, 29)',
            fontFamily: 'Slack-Lato, Slack-Fractions, appleLogo, sans-serif',
            fontStyle: 'normal',
            fontVariantLigatures: 'common-ligatures',
            fontVariantCaps: 'normal',
            fontWeight: 400,
            letterSpacing: 'normal',
            orphans: 2,
            textAlign: 'left',
            textIndent: 0,
            textTransform: 'none',
            widows: 2,
            wordSpacing: 0,
            WebkitTextStrokeWidth: 0,
            whiteSpace: 'normal',
            textDecorationThickness: 'initial',
            textDecorationStyle: 'initial',
            textDecorationColor: 'initial',
            float: 'none',
            display: 'inline !important',
            fontSize: '15px',
          }}
        >
          Sincerely,
        </span>
      </p>
      <div
        style={{
          marginLeft: '20px',
          textAlign: 'left',
          color: 'rgb(34, 34, 34)',
          fontFamily: 'Arial, Helvetica, sans-serif',
          fontSize: 'small',
          fontStyle: 'normal',
          fontVariantLigatures: 'normal',
          fontVariantCaps: 'normal',
          fontWeight: 400,
          letterSpacing: 'normal',
          orphans: 2,
          textIndent: 0,
          textTransform: 'none',
          widows: 2,
          wordSpacing: 0,
          WebkitTextStrokeWidth: 0,
          whiteSpace: 'normal',
          backgroundColor: 'rgb(255, 255, 255)',
          textDecorationThickness: 'initial',
          textDecorationStyle: 'initial',
          textDecorationColor: 'initial',
        }}
      >
        <strong style={{ color: 'rgb(29, 28, 29)', fontSize: '18px' }}>Tony Nguyen</strong>
        <strong style={{ color: 'rgb(29, 28, 29)', fontSize: '18px' }}>
          Human Resources Manager
        </strong>
        <strong
          style={{
            fontFamily: 'Slack-Lato, Slack-Fractions, appleLogo, sans-serif',
            fontSize: '15px',
            color: 'rgb(29, 28, 29)',
          }}
        />
      </div>
      <div
        style={{
          backgroundImage:
            'url(https://storage.googleapis.com/starack-admin-platform.appspot.com/signatureStarack.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          padding: '24px 0',
          margin: '16px',
        }}
      >
        <div
          style={{
            marginLeft: '20px',
            textAlign: 'left',
            color: '#ffffff',
            fontStyle: 'normal',
            fontVariantLigatures: 'normal',
            fontVariantCaps: 'normal',
            fontWeight: 400,
            letterSpacing: 'normal',
            orphans: 2,
            textIndent: 0,
            textTransform: 'none',
            widows: 2,
            wordSpacing: 0,
            WebkitTextStrokeWidth: 0,
            whiteSpace: 'normal',
            textDecorationThickness: 'initial',
            textDecorationStyle: 'initial',
            textDecorationColor: 'initial',
            fontFamily: '"Google Sans", Roboto, RobotoDraft, Helvetica, Arial, sans-serif',
            fontSize: 'medium',
          }}
        >
          <span
            style={{
              fontStyle: 'normal',
              fontVariantLigatures: 'normal',
              fontVariantCaps: 'normal',
              fontWeight: 600,
              letterSpacing: 'normal',
              orphans: 2,
              textIndent: 0,
              textTransform: 'none',
              widows: 2,
              wordSpacing: 0,
              WebkitTextStrokeWidth: 0,
              whiteSpace: 'normal',
              textDecorationThickness: 'initial',
              textDecorationStyle: 'initial',
              textDecorationColor: 'initial',
              fontFamily: '"Google Sans", Roboto, RobotoDraft, Helvetica, Arial, sans-serif',
              fontSize: 'medium',
              color: '#ffffff',
            }}
          >
            <span>
              {' '}
              Starack.JSC
              <br />
            </span>
          </span>
        </div>
        <div
          style={{
            marginLeft: '20px',
            textAlign: 'left',
            color: 'rgb(34, 34, 34)',
            fontStyle: 'normal',
            fontVariantLigatures: 'normal',
            fontVariantCaps: 'normal',
            fontWeight: 400,
            letterSpacing: 'normal',
            orphans: 2,
            textIndent: 0,
            textTransform: 'none',
            widows: 2,
            wordSpacing: 0,
            WebkitTextStrokeWidth: 0,
            whiteSpace: 'normal',
            textDecorationThickness: 'initial',
            textDecorationStyle: 'initial',
            textDecorationColor: 'initial',
            fontFamily: '"Google Sans", Roboto, RobotoDraft, Helvetica, Arial, sans-serif',
            fontSize: 'medium',
          }}
        >
          <span style={{ color: '#ffffff' }} />
          <div style={{ color: '#ffffff', display: 'flex', alignItems: 'center' }}>
            <img
              style={{ width: '16px', height: '24px' }}
              src="https://storage.googleapis.com/starack-admin-platform.appspot.com/solar_map-point-wave-outline.png"
            />
            &nbsp;
            <strong>
              <img
                data-emoji="🇻🇳"
                alt="🇻🇳"
                aria-label="🇻🇳"
                draggable="false"
                src="https://fonts.gstatic.com/s/e/notoemoji/15.0/1f1fb_1f1f3/72.png"
                loading="lazy"
                style={{ height: '1.2em', width: '1.2em', verticalAlign: 'middle' }}
              />
            </strong>
            <strong style={{ fontFamily: 'monospace', fontSize: 'large', color: '#ffffff' }}>
              &nbsp;
            </strong>
            <a
              href="https://goo.gl/maps/CCC7vk4tHJ62HR3Q8"
              target="_blank"
              style={{
                color: '#ffffff',
                textDecoration: 'none',
                fontFamily: 'monospace',
                fontSize: 'large',
              }}
            >
              20/01 Tran Quoc Hoan Street, Ha Noi
            </a>
          </div>
          <div style={{ color: '#ffffff', display: 'flex', alignItems: 'center' }}>
            <img
              style={{ width: '16px', height: '24px' }}
              src="https://storage.googleapis.com/starack-admin-platform.appspot.com/solar_map-point-wave-outline.png"
            />
            &nbsp;
            <strong>
              <img
                data-emoji="🇻🇳"
                alt="🇻🇳"
                aria-label="🇻🇳"
                draggable="false"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Australia.svg/2560px-Flag_of_Australia.svg.png"
                loading="lazy"
                style={{ height: '1.2em', width: '1.2em', verticalAlign: 'middle' }}
              />
            </strong>
            <strong style={{ fontFamily: 'monospace', fontSize: 'large', color: '#ffffff' }}>
              &nbsp;
            </strong>
            <a
              href="https://goo.gl/maps/c9E7xUNmQ49hNrKZ8"
              target="_blank"
              style={{
                color: '#ffffff',
                textDecoration: 'none',
                fontFamily: 'monospace',
                fontSize: 'large',
              }}
            >
              Innovation Campus, 1 Squires Way, Wollongong, NSW 2500
            </a>
          </div>
          <div
            style={{
              fontFamily: 'Slack-Lato, Slack-Fractions, appleLogo, sans-serif',
              fontSize: '15px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img
              style={{ width: '16px', height: '24px' }}
              src="https://storage.googleapis.com/starack-admin-platform.appspot.com/solar_phone-calling-rounded-outline.png"
            />

            <span
              style={{
                color: '#ffffff',
                fontFamily: 'Slack-Lato, Slack-Fractions, appleLogo, sans-serif',
                fontSize: '15px',
              }}
            >
              &nbsp;
            </span>
            <a
              href="tel:+84973279566"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'Slack-Lato, Slack-Fractions, appleLogo, sans-serif',
                fontSize: '15px',
                color: '#ffffff',
                textDecoration: 'none',
              }}
              target="_blank"
            >
              +84 973 279 566
            </a>
            <strong style={{ color: '#ffffff' }}> &nbsp;(Zalo/Whatsapp/Line/Viber)</strong>
          </div>
          <div
            style={{
              fontFamily: 'Slack-Lato, Slack-Fractions, appleLogo, sans-serif',
              fontSize: '15px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img
              style={{ width: '16px', height: '24px' }}
              src="https://storage.googleapis.com/starack-admin-platform.appspot.com/email-16.png"
            />
            <span
              style={{
                color: '#ffffff',
                fontFamily: 'Slack-Lato, Slack-Fractions, appleLogo, sans-serif',
                fontSize: '15px',
              }}
            >
              &nbsp;
            </span>
            <a
              href="mailto:tony.nguyenvan@starack.net"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'Slack-Lato, Slack-Fractions, appleLogo, sans-serif',
                fontSize: '15px',
                color: '#ffffff',
                textDecoration: 'none',
              }}
              target="_blank"
            >
              tony.nguyenvan@starack.net
            </a>
          </div>
          <div
            style={{
              fontFamily: 'Slack-Lato, Slack-Fractions, appleLogo, sans-serif',
              fontSize: '15px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img
              style={{ width: '16px', height: '24px' }}
              src="https://storage.googleapis.com/starack-admin-platform.appspot.com/solar_global-outline.png"
            />
            <span
              style={{
                color: '#ffffff',
                fontFamily: 'Slack-Lato, Slack-Fractions, appleLogo, sans-serif',
                fontSize: '15px',
              }}
            >
              &nbsp;
            </span>
            <a
              href="https://starack.net/"
              target="_blank"
              style={{ color: '#ffffff', textDecoration: 'none' }}
            >
              starack.net
            </a>
          </div>
          {/* <div style={{ fontFamily: '"Google Sans", Roboto, RobotoDraft, Helvetica, Arial, sans-serif', fontSize: 'medium' }}>
        <img
          src="https://ci3.googleusercontent.com/mail-sig/AIorK4zSobH0BirH1dsgFBSBPWCmRFMcUQrQRKvkEZy9bJzBnQD2CX89N3pMOPyoB6JkBKUniLdC8yI"
          width="200"
          height="200"
          data-aii="CiExNVlmb1o3OGd6dDdqVlpXTGlKYUZxSzZVU1FfbWFvQ1g"
          data-os="https://lh3.googleusercontent.com/d/15YfoZ78gzt7jVZWLiJaFqK6USQ_maoCX"
          alt="logo"
        />
      </div> */}
        </div>
      </div>
    </div>
  );
};

export default HRAcceptedEmailTemplate;
