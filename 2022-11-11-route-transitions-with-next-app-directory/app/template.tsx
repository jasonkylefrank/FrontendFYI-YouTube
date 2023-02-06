import { PageWrapper } from "../components/page-wrapper";

export default function Template({ children }: {
  children: React.ReactNode
}) {
  return (
    <PageWrapper>
      {children}
    </PageWrapper>
  );
}