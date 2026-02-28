import type { WordEntry } from '@/types/content';
import { ACT_WORDS } from './act';
import { ALI_WORDS } from './ali';
import { AM_WORDS } from './am';
import { ANIM_WORDS } from './anim';
import { APT_WORDS } from './apt';
import { ASTER_WORDS } from './aster';
import { BAR_WORDS } from './bar';
import { BIO_WORDS } from './bio';
import { BOT_WORDS } from './bot';
import { CAND_WORDS } from './cand';
import { CAP_WORDS } from './cap';
import { CAR_WORDS } from './car';
import { CARN_WORDS } from './carn';
import { CED_WORDS } from './ced';
import { CERN_WORDS } from './cern';
import { CHRON_WORDS } from './chron';
import { CID_WORDS } from './cid';
import { CIRC_WORDS } from './circ';
import { CLAIM_WORDS } from './claim';
import { CRIM_WORDS } from './crim';
import { CULT_WORDS } from './cult';
import { DEC_WORDS } from './dec';
import { DIC_WORDS } from './dic';
import { DIT_WORDS } from './dit';
import { DOM_WORDS } from './dom';
import { DORM_WORDS } from './dorm';
import { EPT_WORDS } from './ept';
import { FAC_WORDS } from './fac';
import { FER_WORDS } from './fer';
import { FESS_WORDS } from './fess';
import { FLU_WORDS } from './flu';
import { FORC_WORDS } from './forc';
import { FORTUN_WORDS } from './fortun';
import { FUND_WORDS } from './fund';
import { GEN_WORDS } from './gen';
import { GEO_WORDS } from './geo';
import { GEST_WORDS } from './gest';
import { GLOB_WORDS } from './glob';
import { GRAV_WORDS } from './grav';
import { HER_WORDS } from './her';
import { HOSPIT_WORDS } from './hospit';
import { HUM_WORDS } from './hum';
import { IT_WORDS } from './it';
import { JEC_WORDS } from './jec';
import { JUR_WORDS } from './jur';
import { LAV_WORDS } from './lav';
import { LECT_WORDS } from './lect';
import { LIGHT_WORDS } from './light';
import { LOC_WORDS } from './loc';
import { LUD_WORDS } from './lud';
import { MAIN_WORDS } from './main';
import { MAJ_WORDS } from './maj';
import { MAN_WORDS } from './man';
import { MAND_WORDS } from './mand';
import { MAT_WORDS } from './mat';
import { MEDI_WORDS } from './medi';
import { MERG_WORDS } from './merg';
import { MIGR_WORDS } from './migr';
import { MIN_WORDS } from './min';
import { MISC_WORDS } from './misc';
import { MISS_WORDS } from './miss';
import { MON_WORDS } from './mon';
import { MONSTR_WORDS } from './monstr';
import { MORT_WORDS } from './mort';
import { MOV_WORDS } from './mov';
import { NAT_WORDS } from './nat';
import { NAV_WORDS } from './nav';
import { NOM_WORDS } from './nom';
import { NOMIN_WORDS } from './nomin';
import { NORM_WORDS } from './norm';
import { NOUR_WORDS } from './nour';
import { NOV_WORDS } from './nov';
import { ORI_WORDS } from './ori';
import { PAR_WORDS } from './par';
import { PART_WORDS } from './part';
import { PATH_WORDS } from './path';
import { PED_WORDS } from './ped';
import { PEL_WORDS } from './pel';
import { PERI_WORDS } from './peri';
import { PERSON_WORDS } from './person';
import { PET_WORDS } from './pet';
import { PLE_WORDS } from './ple';
import { PLOD_WORDS } from './plod';
import { PORT_WORDS } from './port';
import { PRESS_WORDS } from './press';
import { PRIC_WORDS } from './pric';
import { PUN_WORDS } from './pun';
import { QUAINT_WORDS } from './quaint';
import { ROT_WORDS } from './rot';
import { RUD_WORDS } from './rud';
import { SAT_WORDS } from './sat';
import { SERV_WORDS } from './serv';
import { SIM_WORDS } from './sim';
import { SIT_WORDS } from './sit';
import { SOL_WORDS } from './sol';
import { SOLV_WORDS } from './solv';
import { SON_WORDS } from './son';
import { SPEC_WORDS } from './spec';
import { SPIR_WORDS } from './spir';
import { ST_WORDS } from './st';
import { STINCT_WORDS } from './stinct';
import { STRAIN_WORDS } from './strain';
import { TACT_WORDS } from './tact';
import { TAIL_WORDS } from './tail';
import { TAIN_WORDS } from './tain';
import { TORT_WORDS } from './tort';
import { TRA_WORDS } from './tra';
import { TREM_WORDS } from './trem';
import { TROP_WORDS } from './trop';
import { TURB_WORDS } from './turb';
import { UNI_WORDS } from './uni';
import { URB_WORDS } from './urb';
import { VAC_WORDS } from './vac';
import { VAD_WORDS } from './vad';
import { VAL_WORDS } from './val';
import { VEN_WORDS } from './ven';
import { VERS_WORDS } from './vers';
import { VINC_WORDS } from './vinc';
import { VIS_WORDS } from './vis';
import { VIV_WORDS } from './viv';
import { VOC_WORDS } from './voc';
import { VOL_WORDS } from './vol';
import { ZO_WORDS } from './zo';

export const WORDS_BY_ROOT: Record<string, WordEntry[]> = {
  act: ACT_WORDS,
  ali: ALI_WORDS,
  am: AM_WORDS,
  anim: ANIM_WORDS,
  apt: APT_WORDS,
  aster: ASTER_WORDS,
  bar: BAR_WORDS,
  bio: BIO_WORDS,
  bot: BOT_WORDS,
  cand: CAND_WORDS,
  cap: CAP_WORDS,
  car: CAR_WORDS,
  carn: CARN_WORDS,
  ced: CED_WORDS,
  cern: CERN_WORDS,
  chron: CHRON_WORDS,
  cid: CID_WORDS,
  circ: CIRC_WORDS,
  claim: CLAIM_WORDS,
  crim: CRIM_WORDS,
  cult: CULT_WORDS,
  dec: DEC_WORDS,
  dic: DIC_WORDS,
  dit: DIT_WORDS,
  dom: DOM_WORDS,
  dorm: DORM_WORDS,
  ept: EPT_WORDS,
  fac: FAC_WORDS,
  fer: FER_WORDS,
  fess: FESS_WORDS,
  flu: FLU_WORDS,
  forc: FORC_WORDS,
  fortun: FORTUN_WORDS,
  fund: FUND_WORDS,
  gen: GEN_WORDS,
  geo: GEO_WORDS,
  gest: GEST_WORDS,
  glob: GLOB_WORDS,
  grav: GRAV_WORDS,
  her: HER_WORDS,
  hospit: HOSPIT_WORDS,
  hum: HUM_WORDS,
  it: IT_WORDS,
  jec: JEC_WORDS,
  jur: JUR_WORDS,
  lav: LAV_WORDS,
  lect: LECT_WORDS,
  light: LIGHT_WORDS,
  loc: LOC_WORDS,
  lud: LUD_WORDS,
  main: MAIN_WORDS,
  maj: MAJ_WORDS,
  man: MAN_WORDS,
  mand: MAND_WORDS,
  mat: MAT_WORDS,
  medi: MEDI_WORDS,
  merg: MERG_WORDS,
  migr: MIGR_WORDS,
  min: MIN_WORDS,
  misc: MISC_WORDS,
  miss: MISS_WORDS,
  mon: MON_WORDS,
  monstr: MONSTR_WORDS,
  mort: MORT_WORDS,
  mov: MOV_WORDS,
  nat: NAT_WORDS,
  nav: NAV_WORDS,
  nom: NOM_WORDS,
  nomin: NOMIN_WORDS,
  norm: NORM_WORDS,
  nour: NOUR_WORDS,
  nov: NOV_WORDS,
  ori: ORI_WORDS,
  par: PAR_WORDS,
  part: PART_WORDS,
  path: PATH_WORDS,
  ped: PED_WORDS,
  pel: PEL_WORDS,
  peri: PERI_WORDS,
  person: PERSON_WORDS,
  pet: PET_WORDS,
  ple: PLE_WORDS,
  plod: PLOD_WORDS,
  port: PORT_WORDS,
  press: PRESS_WORDS,
  pric: PRIC_WORDS,
  pun: PUN_WORDS,
  quaint: QUAINT_WORDS,
  rot: ROT_WORDS,
  rud: RUD_WORDS,
  sat: SAT_WORDS,
  serv: SERV_WORDS,
  sim: SIM_WORDS,
  sit: SIT_WORDS,
  sol: SOL_WORDS,
  solv: SOLV_WORDS,
  son: SON_WORDS,
  spec: SPEC_WORDS,
  spir: SPIR_WORDS,
  st: ST_WORDS,
  stinct: STINCT_WORDS,
  strain: STRAIN_WORDS,
  tact: TACT_WORDS,
  tail: TAIL_WORDS,
  tain: TAIN_WORDS,
  tort: TORT_WORDS,
  tra: TRA_WORDS,
  trem: TREM_WORDS,
  trop: TROP_WORDS,
  turb: TURB_WORDS,
  uni: UNI_WORDS,
  urb: URB_WORDS,
  vac: VAC_WORDS,
  vad: VAD_WORDS,
  val: VAL_WORDS,
  ven: VEN_WORDS,
  vers: VERS_WORDS,
  vinc: VINC_WORDS,
  vis: VIS_WORDS,
  viv: VIV_WORDS,
  voc: VOC_WORDS,
  vol: VOL_WORDS,
  zo: ZO_WORDS,
};

export const WORDS: WordEntry[] = [
  ...ACT_WORDS,
  ...ALI_WORDS,
  ...AM_WORDS,
  ...ANIM_WORDS,
  ...APT_WORDS,
  ...ASTER_WORDS,
  ...BAR_WORDS,
  ...BIO_WORDS,
  ...BOT_WORDS,
  ...CAND_WORDS,
  ...CAP_WORDS,
  ...CAR_WORDS,
  ...CARN_WORDS,
  ...CED_WORDS,
  ...CERN_WORDS,
  ...CHRON_WORDS,
  ...CID_WORDS,
  ...CIRC_WORDS,
  ...CLAIM_WORDS,
  ...CRIM_WORDS,
  ...CULT_WORDS,
  ...DEC_WORDS,
  ...DIC_WORDS,
  ...DIT_WORDS,
  ...DOM_WORDS,
  ...DORM_WORDS,
  ...EPT_WORDS,
  ...FAC_WORDS,
  ...FER_WORDS,
  ...FESS_WORDS,
  ...FLU_WORDS,
  ...FORC_WORDS,
  ...FORTUN_WORDS,
  ...FUND_WORDS,
  ...GEN_WORDS,
  ...GEO_WORDS,
  ...GEST_WORDS,
  ...GLOB_WORDS,
  ...GRAV_WORDS,
  ...HER_WORDS,
  ...HOSPIT_WORDS,
  ...HUM_WORDS,
  ...IT_WORDS,
  ...JEC_WORDS,
  ...JUR_WORDS,
  ...LAV_WORDS,
  ...LECT_WORDS,
  ...LIGHT_WORDS,
  ...LOC_WORDS,
  ...LUD_WORDS,
  ...MAIN_WORDS,
  ...MAJ_WORDS,
  ...MAN_WORDS,
  ...MAND_WORDS,
  ...MAT_WORDS,
  ...MEDI_WORDS,
  ...MERG_WORDS,
  ...MIGR_WORDS,
  ...MIN_WORDS,
  ...MISC_WORDS,
  ...MISS_WORDS,
  ...MON_WORDS,
  ...MONSTR_WORDS,
  ...MORT_WORDS,
  ...MOV_WORDS,
  ...NAT_WORDS,
  ...NAV_WORDS,
  ...NOM_WORDS,
  ...NOMIN_WORDS,
  ...NORM_WORDS,
  ...NOUR_WORDS,
  ...NOV_WORDS,
  ...ORI_WORDS,
  ...PAR_WORDS,
  ...PART_WORDS,
  ...PATH_WORDS,
  ...PED_WORDS,
  ...PEL_WORDS,
  ...PERI_WORDS,
  ...PERSON_WORDS,
  ...PET_WORDS,
  ...PLE_WORDS,
  ...PLOD_WORDS,
  ...PORT_WORDS,
  ...PRESS_WORDS,
  ...PRIC_WORDS,
  ...PUN_WORDS,
  ...QUAINT_WORDS,
  ...ROT_WORDS,
  ...RUD_WORDS,
  ...SAT_WORDS,
  ...SERV_WORDS,
  ...SIM_WORDS,
  ...SIT_WORDS,
  ...SOL_WORDS,
  ...SOLV_WORDS,
  ...SON_WORDS,
  ...SPEC_WORDS,
  ...SPIR_WORDS,
  ...ST_WORDS,
  ...STINCT_WORDS,
  ...STRAIN_WORDS,
  ...TACT_WORDS,
  ...TAIL_WORDS,
  ...TAIN_WORDS,
  ...TORT_WORDS,
  ...TRA_WORDS,
  ...TREM_WORDS,
  ...TROP_WORDS,
  ...TURB_WORDS,
  ...UNI_WORDS,
  ...URB_WORDS,
  ...VAC_WORDS,
  ...VAD_WORDS,
  ...VAL_WORDS,
  ...VEN_WORDS,
  ...VERS_WORDS,
  ...VINC_WORDS,
  ...VIS_WORDS,
  ...VIV_WORDS,
  ...VOC_WORDS,
  ...VOL_WORDS,
  ...ZO_WORDS,
];

export const getWordBySlug = (slug: string) => WORDS.find((word) => word.slug === slug);
