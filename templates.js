module.exports = {
  wrapTemplate: (content, title = 'Notification') => `
    <!DOCTYPE html>
    <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          margin: 0;
          padding: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: #334155;
        }

        .wrapper {
          width: 100%;
          table-layout: fixed;
          padding: 40px 0 60px;
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
        }

        .container {
          max-width: 520px;
          margin: 0 auto;
          background: #ffffff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 
            0 4px 6px -1px rgba(15, 23, 42, 0.03),
            0 10px 30px -10px rgba(15, 23, 42, 0.08),
            0 20px 40px -20px rgba(15, 23, 42, 0.12);
          transition: transform 0.3s ease;
          position: relative;
          border: 1px solid rgba(226, 232, 240, 0.6);
        }

        .header {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          padding: 32px 40px;
          text-align: center;
          position: relative;
        }

        .header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #6366f1 0%, #3b82f6 100%);
        }

        .brand-section {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 8px;
        }

        .brand-icon {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          color: #ffffff;
          font-weight: 700;
        }

        .brand-text {
          font-size: 20px;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.01em;
        }

        .title {
          font-size: 13px;
          font-weight: 500;
          color: #94a3b8;
          letter-spacing: 0.02em;
          margin-top: 4px;
        }

        .content {
          padding: 40px;
          font-size: 15px;
          line-height: 1.7;
          color: #475569;
          background: #ffffff;
        }

        .content::before {
          content: '';
          display: block;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, #e2e8f0 50%, transparent 100%);
          margin-bottom: 40px;
        }

        .footer {
          background: #f8fafc;
          padding: 24px 40px;
          text-align: center;
          font-size: 13px;
          color: #64748b;
          border-top: 1px solid #e2e8f0;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          color: #ffffff;
          padding: 14px 28px;
          text-decoration: none;
          border-radius: 10px;
          margin-top: 24px;
          font-weight: 600;
          font-size: 14px;
          gap: 8px;
          transition: all 0.3s ease;
          border: none;
        }

        .btn:hover {
          transform: translateY(-1px);
          background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.15);
        }

        .info-card {
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          border: 1px solid #e2e8f0;
          padding: 24px;
          margin: 24px 0;
          border-radius: 14px;
          border-left: 4px solid #6366f1;
        }

        .info-card.danger {
          background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
          border-color: #fecaca;
          border-left: 4px solid #ef4444;
        }

        .info-card.success {
          background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
          border-color: #bbf7d0;
          border-left: 4px solid #22c55e;
        }

        .label {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #64748b;
          display: block;
          margin-bottom: 6px;
          font-weight: 600;
        }

        .value {
          font-family: 'JetBrains Mono', 'Monaco', 'Courier New', monospace;
          background: rgba(15, 23, 42, 0.04);
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 14px;
          color: #0f172a;
          display: inline-block;
          border: 1px solid #e2e8f0;
          margin: 4px 0;
          word-break: break-all;
        }

        .link-text {
          color: #3b82f6;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .link-text:hover {
          color: #2563eb;
          text-decoration: underline;
        }

        p { 
          margin-top: 0; 
          margin-bottom: 1.5em; 
          line-height: 1.6;
        }

        .code-display {
          font-family: 'JetBrains Mono', monospace;
          font-size: 36px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-align: center;
          margin: 32px 0;
          color: #0f172a;
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          padding: 24px;
          border-radius: 16px;
          border: 1px solid #e2e8f0;
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          margin: 8px 0;
        }

        .status-badge.pending {
          background: rgba(251, 191, 36, 0.1);
          color: #d97706;
          border: 1px solid rgba(251, 191, 36, 0.3);
        }

        .status-badge.approved {
          background: rgba(34, 197, 94, 0.1);
          color: #16a34a;
          border: 1px solid rgba(34, 197, 94, 0.3);
        }

        .divider {
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, #e2e8f0 50%, transparent 100%);
          margin: 28px 0;
        }

        .download-links {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin: 20px 0;
        }

        .download-card {
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 16px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .download-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.1);
        }

        .download-icon {
          font-size: 20px;
          margin-bottom: 8px;
          color: #6366f1;
        }

        ul {
          color: #475569;
          padding-left: 20px;
          margin-bottom: 24px;
        }

        li {
          margin-bottom: 6px;
        }

        @media screen and (max-width: 600px) {
          .content, .header { padding: 24px; }
          .footer { padding: 20px 24px; }
          .container { 
            width: 95% !important; 
            border-radius: 16px;
            margin: 0 2.5%;
          }
          .code-display { font-size: 28px; padding: 20px; }
          .download-links { grid-template-columns: 1fr; }
        }
      </style>
    </head>
    <body>
      <div class="wrapper">
        <div style="height: 20px;"></div>
        <div class="container">
          <div class="header">
            <div class="brand-section">
              <div class="brand-icon">W</div>
              <div class="brand-text">Whiz POS</div>
            </div>
            <div class="title">${title}</div>
          </div>
          <div class="content">
            ${content}
          </div>
          <div class="footer">
            &copy; ${new Date().getFullYear()} Whiz POS<br>
            <small style="color: #94a3b8; font-size: 12px;">Automated System Notification</small>
          </div>
        </div>
      </div>
    </body>
    </html>
  `,

  approvalEmail: (data) => `
    <p>Hello <strong>${data.name}</strong>,</p>
    <p>Your account has been successfully verified and approved. You now have full access to the Back Office and Windows POS downloads.</p>

    <div class="status-badge approved">
      ✓ Account Approved
    </div>

    <div class="info-card success">
      <span class="label">Back Office Access</span>
      <div style="margin: 8px 0 16px;">
        <a href="${data.backOfficeLink}" class="link-text">${data.backOfficeLink}</a>
      </div>

      <span class="label">Username</span>
      <div style="margin: 6px 0 12px;">
        <span class="value">${data.backOfficeUsername}</span>
      </div>

      <span class="label">Temporary Password</span>
      <div style="margin: 6px 0 0;">
        <span class="value">${data.backOfficePassword}</span>
      </div>
    </div>

    <p><strong>Downloads:</strong></p>
    <div class="download-links">
      <div class="download-card">
        <div class="download-icon">🖥️</div>
        <a href="${data.windowsLink}" class="link-text">Download Windows POS</a>
      </div>
      <div class="download-card">
        <div class="download-icon">📱</div>
        <a href="${data.apkLink}" class="link-text">Download Mobile App</a>
      </div>
    </div>

    <div class="divider"></div>

    <a href="${data.loginLink}" class="btn">
      → Login to Dashboard
    </a>

    <p style="font-size: 14px; color: #64748b; margin-top: 20px;">
      Need help getting started? 
      <a href="https://whizpos.zone.id/request-access" class="link-text">View our onboarding guide</a>
    </p>
  `,

  rejectionEmail: (data) => `
    <p>Hello <strong>${data.name}</strong>,</p>
    <p>Your account application has been reviewed and was not approved at this time.</p>

    <div class="info-card danger">
      <span class="label" style="color: #dc2626;">Reason for Rejection</span>
      <div style="margin-top: 10px; line-height: 1.6; color: #991b1b;">
        ${data.reason}
      </div>
    </div>

    <p>You may login to your dashboard to review your application details and submit a revised application.</p>

    <div class="divider"></div>

    <a href="${data.loginLink}" class="btn">
      ↻ Login & Re-apply
    </a>

    <p style="font-size: 14px; color: #64748b; margin-top: 20px;">
      For questions about the rejection or to provide additional information, please contact our 
      <a href="mailto:support.whizpos@gmail.com" class="link-text">support team</a>.
    </p>
  `,

  resetPasswordEmail: (data) => `
    <p>We received a request to reset your password. Use the secure verification code below to complete the process.</p>

    <div class="code-display">${data.code}</div>

    <div style="text-align: center;">
      <p style="color: #64748b; margin-bottom: 20px;">
        Enter this code on the password reset page, or click the button below:
      </p>
      
      <a href="${data.resetLink}" class="btn">
        🔐 Reset Password
      </a>
    </div>

    <div class="info-card" style="margin-top: 28px;">
      <p style="font-size: 13px; color: #64748b; margin: 0;">
        <strong>Security Note:</strong> This verification code will expire in <strong>1 hour</strong>. 
        If you did not request this password reset, please ignore this email.
      </p>
    </div>
  `,

  welcomeEmail: (data) => `
    <p>Welcome to <strong>Whiz POS</strong>, ${data.name}!</p>
    
    <p>Thank you for choosing Whiz POS. We've received your registration request and it's currently under review by our team.</p>

    <div class="status-badge pending">
      ⏳ Application Pending Review
    </div>

    <div class="info-card">
      <p style="margin: 0; color: #475569; font-size: 14px;">
        Our team typically processes applications within <strong>24-48 hours</strong>. 
        You will receive a notification email once your application has been reviewed.
      </p>
    </div>

    <p><strong>What happens next?</strong></p>
    
    <ul>
      <li>Application review by our team</li>
      <li>Account verification and approval</li>
      <li>Access to Back Office and POS downloads</li>
    </ul>

    <div class="divider"></div>

    <p style="font-size: 14px; color: #64748b;">
      In the meantime, you can 
      <a href="https://whizpos.zone.id/mobile" class="link-text">explore our documentation</a> or 
      <a href="https://whizpos.zone.id/windows" class="link-text">view a demo</a>.
    </p>
  `
};