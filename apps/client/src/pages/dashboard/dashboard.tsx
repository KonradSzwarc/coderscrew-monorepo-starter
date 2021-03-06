import { Button, styled, Typography } from '@ccms/ui';

import { authActions, authSelectors } from '@/modules/auth';
import { LanguagePicker, useTranslation } from '@/services/i18n';

const PageContainer = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '100vh',
  backgroundColor: theme.colors.gray[50],
}));

const Title = styled(Typography)({
  marginBottom: 12,
});

const StyledButton = styled(Button)({
  marginTop: 80,
});

const StyledLanguagePicker = styled(LanguagePicker)({
  position: 'fixed',
  top: 16,
  right: 16,
});

export const Dashboard = () => {
  const { t } = useTranslation('dashboard');
  const user = authSelectors.useAuthorizedUser();

  return (
    <PageContainer>
      <Title size="3xl" weight="bold" color="title">
        {t('title', { user: user?.email ?? '' })}
      </Title>
      <Typography size="lg" weight="normal" color="primary">
        {t('content')}
      </Typography>
      <StyledLanguagePicker />
      <StyledButton size="xl" variant="solid" color="primary" onClick={() => authActions.logout()}>
        {t('logOut')}
      </StyledButton>
    </PageContainer>
  );
};
