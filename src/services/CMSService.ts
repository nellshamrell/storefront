import { CMSRecord } from '../common/types';
import { CompoundAction } from 'redoodle';
import { IAppState } from '../store/app';
import { SetLanguages, SetRecords } from '../store/cms';
import { Store } from 'redux';

export class CMSService {
  public static store: Store<IAppState>;
  public static instance: CMSService;

  public static init(store: Store) {
    this.instance = new CMSService(store);
    CMSService.fetchRecords();
  }

  private static fetchRecords() {
    // fetch('/api/get-cms')
    //   .then(res => res.json())
    //   .then(json => json.records)
    //   .then((records: CMSRecord[]) => {
    //     if (!records.length) return;
    //     const languages = records[0].en.split(',');
    //     CMSService.store.dispatch(
    //       CompoundAction([SetRecords.create(records.slice(1)), SetLanguages.create(languages)])
    //     );
    //   });

    // TODO: replace fake records with real records from airtable
    const records = [
      {
        key: 'hero_title',
        en: 'Bexar Food Program',
        es: 'Bexar Programa de Comida',
      },
      {
        key: 'hero_image',
        en: 'vegetables',
        es: 'verduras',
        image: { url: 'https://dl.airtable.com/.attachments/3f876aa40d6e0dd6fd22edbf71d00232/83133c8b/bg3.jpg' },
      },
    ];
    const languages = ['en', 'es'];

    CMSService.store.dispatch(CompoundAction([SetRecords.create(records), SetLanguages.create(languages)]));
  }

  private constructor(store: Store) {
    CMSService.instance = this;
    CMSService.store = store;
  }
}