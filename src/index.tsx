import * as React from 'react';
import { Mjml2HtmlOptions, render } from 'mjml-react';

import { initIntl } from './i18n';

import { getLocalizedMonthlyReportSubject } from './utils/localization';

import { BasicTemplate, BasicTemplateProps } from './templates/basic';
import {
  BasicWithAvatarTemplate,
  BasicWithAvatarTemplateProps,
} from './templates/basic-with-avatar';

import {
  ResetPasswordTemplate,
  ResetPasswordTemplateProps,
} from './templates/reset-password';

import {
  TransactionTemplate,
  TransactionTemplateProps,
} from './templates/transaction';

import {
  NewSupporterTemplate,
  NewSupporterTemplateProps,
} from './templates/new-supporter';
import {
  ReferralTxTemplate,
  ReferralTxTemplateProps,
} from './templates/referral-tx';
import { MonthlyReportCreatorTemplate } from './templates/reports/monthly/creator';
import { MonthlyReportCreatorTemplateProps } from './templates/reports/monthly/creator/types';
import { MonthlyReportCivicLikerV1Template } from './templates/reports/monthly/civic-liker/v1';
import { MonthlyReportCivicLikerV1TemplateProps } from './templates/reports/monthly/civic-liker/v1.types';
import { MonthlyReportCivicLikerV2Template } from './templates/reports/monthly/civic-liker/v2';
import { MonthlyReportCivicLikerV2TemplateProps } from './templates/reports/monthly/civic-liker/v2.types';

export const getBasicTemplate = (
  props: BasicTemplateProps,
  options?: Mjml2HtmlOptions
) => {
  const { html: body } = render(<BasicTemplate {...props} />, {
    minify: false,
    ...options,
  });
  const { subject } = props;
  return { subject, body };
};

export const getBasicWithAvatarTemplate = (
  props: BasicWithAvatarTemplateProps,
  options?: Mjml2HtmlOptions
) => {
  const { html: body } = render(<BasicWithAvatarTemplate {...props} />, {
    minify: false,
    ...options,
  });
  const { subject } = props;
  return { subject, body };
};

export const getResetPasswordTemplate = (
  props: ResetPasswordTemplateProps,
  options?: Mjml2HtmlOptions
) => {
  const intl = initIntl();
  const {
    subject = intl.formatMessage({ id: 'reset-password.subject' }),
  } = props;
  const { html: body } = render(
    <ResetPasswordTemplate {...{ ...props, subject }} />,
    { minify: false, ...options }
  );
  return { subject, body };
};

export const getTransactionTemplate = (
  props: TransactionTemplateProps,
  options?: Mjml2HtmlOptions
) => {
  const intl = initIntl();
  let subject = intl.formatMessage(
    { id: 'transaction.subject' },
    { amount: props.amount }
  );
  const { isResend } = props;
  if (isResend) subject = intl.formatMessage({ id: 'resend' }).concat(subject);
  const { html: body } = render(
    <TransactionTemplate {...{ ...props, subject }} />,
    { minify: false, ...options }
  );
  return { subject, body };
};

export const getNewSupporterTemplate = (
  props: NewSupporterTemplateProps,
  options?: Mjml2HtmlOptions
) => {
  const { subject } = props;
  const { html: body } = render(<NewSupporterTemplate {...props} />, {
    minify: false,
    ...options,
  });
  return { subject, body };
};

export const getReferralTxTemplate = (
  props: ReferralTxTemplateProps,
  options?: Mjml2HtmlOptions
) => {
  const { subject } = props;
  const { html: body } = render(<ReferralTxTemplate {...props} />, {
    minify: false,
    ...options,
  });
  return { subject, body };
};

export const getMonthlyReportCreatorTemplate = (
  props: MonthlyReportCreatorTemplateProps,
  options?: Mjml2HtmlOptions
) => {
  const intl = initIntl();
  const subject = getLocalizedMonthlyReportSubject(
    intl,
    'creator',
    props.timestamp,
    {
      timeZone: props.timeZone,
    }
  );
  const { html: body } = render(<MonthlyReportCreatorTemplate {...props} />, {
    minify: false,
    ...options,
  });
  return { subject, body };
};

export const getMonthlyReportCivicLikerV1Template = (
  props: MonthlyReportCivicLikerV1TemplateProps,
  options?: Mjml2HtmlOptions
) => {
  const intl = initIntl();
  const subject = getLocalizedMonthlyReportSubject(
    intl,
    'civic-liker',
    props.timestamp
  );
  const { html: body } = render(
    <MonthlyReportCivicLikerV1Template {...props} />,
    { minify: false, ...options }
  );
  return { subject, body };
};

export const getMonthlyReportCivicLikerV2Template = (
  props: MonthlyReportCivicLikerV2TemplateProps,
  options?: Mjml2HtmlOptions
) => {
  const intl = initIntl();
  const subject = getLocalizedMonthlyReportSubject(
    intl,
    'civic-liker',
    props.timestamp
  );
  const { html: body } = render(
    <MonthlyReportCivicLikerV2Template {...props} />,
    { minify: false, ...options }
  );
  return { subject, body };
};
