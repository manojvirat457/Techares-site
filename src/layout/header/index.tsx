import { Header as HeaderV1 } from './desktop/v1';
import { MobileHeader } from './mobile';

export function MainHeader() {
  return (
    <>
      <HeaderV1 />
      <MobileHeader />
    </>
  );
}
