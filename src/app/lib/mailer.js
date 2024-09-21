import nodemailer from 'nodemailer';


const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
export const sendOtpEmail = async (email, otp) => {
  const emailTemplate = `
  <html>
  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        background: #ffffff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
      .header {
        text-align: center;
        padding-bottom: 20px;
      }
      .header img {
        width: 150px;
        margin-bottom: 10px;
      }
      .header h1 {
        color: #4CAF50;
        margin: 0;
        font-size: 28px;
      }
      .content {
        font-size: 16px;
        color: #555555;
        line-height: 1.6;
      }
      .otp {
        font-size: 24px;
        font-weight: bold;
        color: #333333;
        margin: 20px 0;
        text-align: center;
      }
      .footer {
        text-align: center;
        font-size: 14px;
        color: #999999;
        padding-top: 20px;
        border-top: 1px solid #e0e0e0;
        margin-top: 30px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <img src="https://lh3.googleusercontent.com/fife/ALs6j_FGU9uWJ1MFvlg5WkXb96J750lWHCmGMO3uG2SPoe-ZVSjUirL50GzNOKMHob4tiZFNO-8RtR3d8evPi0viSqxTw2juq5jTe-V9ilmdZcQgKxCf2nY7WNQBS2_lB5Bbvy-FMEVcvPR4wtPi5mM6RdVy1D6lz7M_ShCquXVS_f1iPKbbpivh1ze6sljEsO57I5-Rqv7xUq5WBcIfwPyVe-9ZgedgIuChV0Jf6jE2p_p5lcDjRNcecA0lz1qHqpcWx4qF0GEg2jRh9qkIbMPXkyNGSzhBlg5Joqi0iSJKfEWADyjynbhabKSyqIGXQfDGOhh3d0aaVnu_uN_AxijNKIFBsLM4zgUxE2-q2CajimR0KTIp-xZ49KOfJSHecp7peff6KjFphOtjWS21_PP8gq8DbT6fxact69u5ZYd62-SnInG0rTKa9h5HvSkuRiPgEHgJJn5A_rzvgL0TPY6R2bGm9CtxLNnCo3ut7U8RSM6KJ0I-nGPPz-whEPzO1HJyeXe8ZRSo1sAAyDVrfDi_LQtqZslX_OFkiogtvaG6sTasWoEeO0iCpcPvvaKGG2zmFadQ7k0PDNQCdCXgC1ihniVvUKWZAwhwLr23AhE-q1VVXVMBKY4Ko0o1MqesqJLCkMxPTqIaRTrzARQhHOBjGioxDIfww_bIKLbOrpg7DEsgeKkykCf8ForrHQpRuwtVQV9q1Yen1DMIQ63aQHbgmYwlhy6ehx7n10Pu4x-aXDEfKsp6PYHoT0_PB1_swaa75Gj3fr7KEn2r5KKiN1_LZEljej3yO93duQpb1qWxz1jBSLXNmx8O4kMSrk0AbYS3Cb1gAgwYPKJstEBDUV84L0ljGhTW0UwONSrURlx1xgMfbPC2Xiv9aU6U2hFsoi-Ws8gKYJpHd_dTspqfDXFVExg9VcAxrBLCILX-5ehV9rnErnkPFPTveviks_jBrnv_vQ8F74HdSNGr64J8-L-hS317x2H7p6lTeJ8GCA7uL_oLlFkp3Ksce0BBXMyKsGTZIj3FxnsmboEjtekqQup07T_F-HzNi6FR56RJbuI-mkV1CB_DWW9SZIDY65Oq3eITZcuC3RzlBvbrnDHwGn6-Lls_ljejsBxJDhRbyB2HaZwmLo-3VmDem5LdHpv1XBhWO7QrEknVGhPbuFPu422WPFkrmJRaMnfMBtkQ3BBz8l9oZmHqlqHA39k9iw4oHFcrkQNbTI_cIv4u_PvWleElYsvPSrTZtJXHbm73eGYNvQgx2i5SEFpUmwssZDv7c9PFfBkt9qwLNjbArGAYvh9kAUvTwvy1ATIEU9J01uf5IVIy3JRZGu9mxnE4Sgp2fC4_WamVL2cwIMAHpqLeWWwGZou77B6KvHma1vqoQ_bafkImm67BU-_3f2-OUgmrBizBegelmFBW8zFQh8DZagYjsH-vmNhbBLrGxyV8jBe9lt5gZhSqI2gdNoF0y3hZ_O5Adr21Ba6iyACYxJp8kJs_djXZV00uL45D8LOemzvUGG3MKhRvDs-4EmGzUFUCT5n-vRCVRibSv81mj2RlSM10zXEA0V0CtwlK8FfG7bZyWx0rIFYVr7umhUNgW5WFVQMoZwEG8mUEHoe7p8wY50d10MthnWhq_SHGt-ODa5e5YZ27INnQm_ZI7dexQg=w1910-h892" alt="JSMaster Logo" />
        <h1>JSMaster</h1>
      </div>
      <div class="content">
        <p>Dear user,</p>
        <p>Thank you for registering with JSMaster. To complete your registration, please use the following OTP:</p>
        <div class="otp">${otp}</div>
        <p>This OTP is valid for 2 minutes. If you did not request this, please ignore this email.</p>
      </div>
      <div class="footer">
        <p>&copy; ${new Date().getFullYear()} JSMaster. All rights reserved.</p>
      </div>
    </div>
  </body>
  </html>
`;

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Your OTP Code from JS Master',
      html: emailTemplate,
    });
  } catch (error) {
    console.error('Error sending OTP email:', error);
    if (error.responseCode === 550) {
      throw new Error('Address not found or invalid email address. Please check and try again.');
    }
    if (error.responseCode === 551) {
      throw new Error('Mailbox unavailable. Please check the email address and try again.');
    }
    throw new Error('Failed to send OTP. Please check the email address and try again.');
  }
};
