import {DetailPage} from './details.po';
import {IndexPage} from './index.po';

describe('Detail Page', () => {
  let detailPage: DetailPage;

  let indexPage: IndexPage;

  beforeEach(() => {
    detailPage = new DetailPage();
    indexPage = new IndexPage();
  });

  it('should display the kitten details', () => {
    detailPage.navigateTo(1);

    const kittenName = detailPage.getKittenName();
    expect(kittenName.getAttribute('value')).toEqual('Cassandra');
    expect(detailPage.getKittenSpeed().getAttribute('value')).toEqual('78');
    expect(detailPage.getKittenStrength().getAttribute('value')).toEqual('50');
    expect(detailPage.getKittenCuteness().getAttribute('value')).toEqual('89');
    expect(detailPage.getKittenBattleScore().getText()).toEqual('7.36');
  });

  describe('when updating kitten details', () => {

    it('should update battlescore', () => {
      detailPage.navigateTo(1);

      expect(detailPage.getKittenBattleScore().getText()).toEqual('7.36');

      detailPage.getKittenSpeed().clear();
      detailPage.getKittenSpeed().sendKeys('100');

      expect(detailPage.getKittenBattleScore().getText()).toEqual('8.1');
    });

    it('should update data on index page', () => {
      detailPage.navigateTo(1);

      expect(detailPage.getKittenBattleScore().getText()).toEqual('7.36');

      detailPage.getKittenSpeed().clear();
      detailPage.getKittenSpeed().sendKeys('100');

      detailPage.doClickOK();

      const kittens = indexPage.getKittenList().$$('ul');
      const speed = kittens.first().$$('span').get(1);

      expect(speed.getText()).toEqual('100');
    });


    describe('with invalid input', () => {
      it('should show errors ', () => {
        detailPage.navigateTo(1);

        detailPage.getKittenSpeed().clear();

        expect(detailPage.getValidationErrors().count()).toEqual(1);
      });
    });

  });
});

