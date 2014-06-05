/*
 * Icons for COFOG taxonomy
 *
 */
var Taxes = Taxes || {};

Taxes.baseKoujo = 330000; // 住民税基礎控除
Taxes.huyoKoujo = 330000; // 一人分の扶養控除
Taxes.taxRate = 0.06; // 住民税率

var OpenSpending = OpenSpending || {};

OpenSpending.identifier = 'kobe_2014_yosan';
OpenSpending.year = '2014';

OpenSpending.Styles = OpenSpending.Styles || {};

OpenSpending.Styles.Cofog = {

  /* kobeshi cofog */
  '20141000': { icon: 'icons/wheelchair.svg', color: '#C75746', bcolor: '#935B3B' },
  '20141100': { icon: 'icons/wheelchair.svg', color: '#C75746', bcolor: '#935B3B' },

  '20141101': { icon: 'icons/bankbook.svg', color: '#C75746', bcolor: '#935B3B' },
  '20141102': { icon: 'icons/civilian-action.svg', color: '#C75746', bcolor: '#935B3B' },
  '20141103': { icon: 'icons/c_kosodate_shien.svg', color: '#C75746', bcolor: '#935B3B' },
  '20141104': { icon: 'icons/c_fukushi.svg', color: '#C75746', bcolor: '#935B3B' },
  '20141105': { icon: 'icons/old-age.svg', color: '#C75746', bcolor: '#935B3B' },
  '20141106': { icon: 'icons/wheelchair.svg', color: '#C75746', bcolor: '#935B3B' },
  '20141107': { icon: 'icons/civilian-action.svg', color: '#C75746', bcolor: '#935B3B' },
  '20141108': { icon: 'icons/payroll.svg', color: '#C75746', bcolor: '#935B3B' },
  '20141109': { icon: 'icons/payroll.svg', color: '#C75746', bcolor: '#935B3B' },
  '20141110': { icon: 'icons/child.svg', color: '#C75746', bcolor: '#935B3B' },
  '20141200': { icon: 'icons/health.svg', color: '#C75746', bcolor: '#FA8072' },
  '20141201': { icon: 'icons/old-age.svg', color: '#C75746', bcolor: '#FA8072' },
  '20141202': { icon: 'icons/family2.svg', color: '#C75746', bcolor: '#FA8072' },



  '20142000': { icon: 'icons/euro.svg', color: '#C75746', bcolor: '#FA8072' },

  '20142100': { icon: 'icons/schools.svg', color: '#C75746', bcolor: '#FA8072' },
  '20142101': { icon: 'icons/legislative.svg', color: '#C75746', bcolor: '#FA8072' },
  '20142102': { icon: 'icons/pre-school.svg', color: '#C75746', bcolor: '#FA8072' },
  '20142103': { icon: 'icons/secondary-upper.svg', color: '#C75746', bcolor: '#FA8072' },
  '20142104': { icon: 'icons/helping-others.svg', color: '#C75746', bcolor: '#FA8072' },
  '20142105': { icon: 'icons/health.svg', color: '#C75746', bcolor: '#FA8072' },
  '20142106': { icon: 'icons/education.svg', color: '#C75746', bcolor: '#FA8072' },
  '20142107': { icon: 'icons/secondary-lower.svg', color: '#C75746', bcolor: '#FA8072' },
  '20142108': { icon: 'icons/classroom.svg', color: '#C75746', bcolor: '#FA8072' },
  '20142109': { icon: 'icons/books.svg', color: '#C75746', bcolor: '#FA8072' },
  
   '20142200': { icon: 'icons/culture.svg', color: '#C75746', bcolor: '#FA8072' },
  '20142201': { icon: 'icons/bankbook.svg', color: '#C75746', bcolor: '#FA8072' },
  '20142202': { icon: 'icons/port-tower2.svg', color: '#C75746', bcolor: '#FA8072' },
  '20142203': { icon: 'icons/c_bunnka.svg', color: '#C75746', bcolor: '#FA8072' },

  '20143000': { icon: 'icons/health.svg', color: '#C75746', bcolor: '#4E6D00' },
  '20143100': { icon: 'icons/disposal_center.svg', color: '#C75746', bcolor: '#4E6D00' },
  '20143101': { icon: 'icons/bankbook.svg', color: '#C75746', bcolor: '#4E6D00' },
  '20143102': { icon: 'icons/water.svg', color: '#C75746', bcolor: '#4E6D00' },
  '20143103': { icon: 'icons/garbage.svg', color: '#C75746', bcolor: '#4E6D00' },
  '20143104': { icon: 'icons/disposal_center.svg', color: '#C75746', bcolor: '#4E6D00' },
  '20143200': { icon: 'icons/health.svg', color: '#C75746', bcolor: '#4E6D00' },
  '20143201': { icon: 'icons/bankbook.svg', color: '#C75746', bcolor: '#4E6D00' },
  '20143202': { icon: 'icons/medical-supplies.svg', color: '#C75746', bcolor: '#4E6D00' },
  '20143203': { icon: 'icons/health.svg', color: '#C75746', bcolor: '#4E6D00' },
  '20143205': { icon: 'icons/c_waterdoun-watersup.svg', color: '#C75746', bcolor: '#4E6D00' },
  '20143204': { icon: 'icons/water.svg', color: '#C75746', bcolor: '#4E6D00' },

  '20144000': { icon: 'icons/housing.svg', color: '#C75746', bcolor: '#4E6D00' },
  '20144100': { icon: 'icons/housing.svg', color: '#C75746', bcolor: '#4E6D00' },
  '20144101': { icon: 'icons/bankbook.svg', color: '#C75746', bcolor: '#4E6D00' },
  '20144102': { icon: 'icons/rezoning.svg', color: '#C75746', bcolor: '#4E6D00' },
  '20144103': { icon: 'icons/railways.svg', color: '#C75746', bcolor: '#4E6D00' },
  '20144104': { icon: 'icons/housing.svg', color: '#C75746', bcolor: '#4E6D00' },

  '20144200': { icon: 'icons/redevelop.svg', color: '#C75746', bcolor: '#4E6D00' },
  '20144201': { icon: 'icons/car.svg', color: '#C75746', bcolor: '#4E6D00' },
  '20144202': { icon: 'icons/machi.svg', color: '#C75746', bcolor: '#4E6D00' },
  '20144203': { icon: 'icons/airplane.svg', color: '#C75746', bcolor: '#4E6D00' },
  '20144204': { icon: 'icons/harbor.svg', color: '#C75746', bcolor: '#4E6D00' },
  '20144205': { icon: 'icons/redevelop.svg', color: '#C75746', bcolor: '#4E6D00' },
  '20144206': { icon: 'icons/bus.svg', color: '#C75746', bcolor: '#4E6D00' },
  '20144207': { icon: 'icons/railways.svg', color: '#C75746', bcolor: '#4E6D00' },

  '20145000': { icon: 'icons/bridge.svg', color: '#C75746', bcolor: '#D33673' },
  '20145100': { icon: 'icons/bankbook.svg', color: '#C75746', bcolor: '#D33673' },
  '20145200': { icon: 'icons/bridge.svg', color: '#C75746', bcolor: '#D33673' },
  '20145300': { icon: 'icons/tree.svg', color: '#C75746', bcolor: '#D33673' },
  '20145400': { icon: 'icons/river.svg', color: '#C75746', bcolor: '#D33673' },
  '20145500': { icon: 'icons/harbor.svg', color: '#C75746', bcolor: '#D33673' },

  '20146000': { icon: 'icons/sangyou3.svg', color: '#C75746', bcolor: '#D33673' },
  '20146100': { icon: 'icons/c_syoukougyou.svg', color: '#C75746', bcolor: '#D33673' },
  '20146101': { icon: 'icons/bankbook.svg', color: '#C75746', bcolor: '#D33673' },
  '20146102': { icon: 'icons/civilian-action.svg', color: '#C75746', bcolor: '#D33673' },
  '20146103': { icon: 'icons/port-tower2.svg', color: '#C75746', bcolor: '#D33673' },
  '20146104': { icon: 'icons/health.svg', color: '#C75746', bcolor: '#D33673' },
  '20146105': { icon: 'icons/water.svg', color: '#C75746', bcolor: '#D33673' },
  '20146106': { icon: 'icons/pig.svg', color: '#C75746', bcolor: '#D33673' },
  '20146200': { icon: 'icons/c_nougyou.svg', color: '#C75746', bcolor: '#D33673' },
  '20146201': { icon: 'icons/civilian-action.svg', color: '#C75746', bcolor: '#D33673' },
  '20146202': { icon: 'icons/bankbook.svg', color: '#C75746', bcolor: '#D33673' },
  '20146203': { icon: 'icons/c_nougyou.svg', color: '#C75746', bcolor: '#D33673' },
  '20146204': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#D33673' },
  '20146205': { icon: 'icons/c_sankaku_ikusei.svg', color: '#C75746', bcolor: '#D33673' },


  '20147000': { icon: 'icons/fire_engine.svg', color: '#C75746', bcolor: '#D33673' },
  '20147100': { icon: 'icons/bankbook.svg', color: '#C75746', bcolor: '#D33673' },
  '20147200': { icon: 'icons/fire.svg', color: '#C75746', bcolor: '#D33673' },
  '20147300': { icon: 'icons/fire_engine.svg', color: '#C75746', bcolor: '#D33673' },

  '20148000': { icon: 'icons/government_office.svg', color: '#C75746', bcolor: '#D33673' },
  '20148100': { icon: 'icons/government_office.svg', color: '#C75746', bcolor: '#D33673' },
  '20148101': { icon: 'icons/bankbook.svg', color: '#C75746', bcolor: '#D33673' },
  '20148102': { icon: 'icons/government_office.svg', color: '#C75746', bcolor: '#D33673' },
  '20148103': { icon: 'icons/pc.svg', color: '#C75746', bcolor: '#D33673' },
  '20148104': { icon: 'icons/japanese-money.svg', color: '#C75746', bcolor: '#D33673' },
  '20148105': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#D33673' },
  '20148106': { icon: 'icons/election.svg', color: '#C75746', bcolor: '#D33673' },
  '20148107': { icon: 'icons/payroll.svg', color: '#C75746', bcolor: '#D33673' },
  '20148108': { icon: 'icons/legislative.svg', color: '#C75746', bcolor: '#D33673' },
  '20148200': { icon: 'icons/javni_dug.svg', color: '#C75746', bcolor: '#D33673' },
  '20148201': { icon: 'icons/japanese-money.svg', color: '#C75746', bcolor: '#D33673' },
  '20148202': { icon: 'icons/javni_dug.svg', color: '#C75746', bcolor: '#D33673' },


  '20149000': { icon: 'icons/transfers.svg', color: '#C75746', bcolor: '#D33673' },
  '20149100': { icon: 'icons/transfers.svg', color: '#C75746', bcolor: '#D33673' },

};


