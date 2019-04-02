import { EqrsRoleRequestPage } from './app.po';

describe('eqrs-role-request App', () => {
  let page: EqrsRoleRequestPage;

  beforeEach(() => {
    page = new EqrsRoleRequestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
