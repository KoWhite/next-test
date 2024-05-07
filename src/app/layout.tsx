import StyledComponentsRegistry from '@/lib/registry';
import '@/styles/globals.css';

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en" className="light">
    <body>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </body>
  </html>
);

export default RootLayout;
