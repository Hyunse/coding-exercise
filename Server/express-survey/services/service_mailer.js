import sendgrid from 'sendgrid';
import { SEND_GRID_KEY } from '../config/config_keys';

const helper = sendgrid.mail;

class Mailer extends helper.Mail {
  constructor({ subject, recipients }, content) {
    super();

    this.from_email = new helper.Email('no-reply@emaily.com');
    this.body = new helper.Content('text/html', content);
    this.recipients = this.formatAddress(recipients);

    this.addContent(this.body);
    this.addClickTracking();
    this.addRecipients();
  }

  formatAddress(recipients) {
    return recipients.map(({ email }) => {
      return new helper.Email(email);
    });
  }

  addClickTracking() {
    const trackingSettings = new helper.TrackingSettings();
    const clickTracking = new helper.ClickTracking(true, true);

    trackingSettings.setClickTracking(clickTracking);
    this.addTrackingSettings(trackingSettings);
  }

  addRecipients() {
    const personalize = new helper.Personalization();

    this.recipients.forEach((recipent) => {
      personalize.addTo(this.recipient);
    });

    this.addPersonalization(personalize);
  }
}

export default Mailer;
