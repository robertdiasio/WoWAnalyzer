import BloodDeathKnight from 'analysis/retail/deathknight/blood';
import FrostDeathKnight from 'analysis/retail/deathknight/frost';
import UnholyDeathKnight from 'analysis/retail/deathknight/unholy';
import BalanceDruid from 'analysis/retail/druid/balance';
import FeralDruid from 'analysis/retail/druid/feral';
import GuardianDruid from 'analysis/retail/druid/guardian';
import RestoDruid from 'analysis/retail/druid/restoration';
import BeastMasteryHunter from 'analysis/retail/hunter/beastmastery';
import MarksmanshipHunter from 'analysis/retail/hunter/marksmanship';
import SurvivalHunter from 'analysis/retail/hunter/survival';
import ArcaneMage from 'analysis/retail/mage/arcane';
import FireMage from 'analysis/retail/mage/fire';
import FrostMage from 'analysis/retail/mage/frost';
import BrewmasterMonk from 'analysis/retail/monk/brewmaster';
import MistweaverMonk from 'analysis/retail/monk/mistweaver';
import WindwalkerMonk from 'analysis/retail/monk/windwalker';
import HolyPaladin from 'analysis/retail/paladin/holy';
import ProtectionPaladin from 'analysis/retail/paladin/protection';
import RetributionPaladin from 'analysis/retail/paladin/retribution';
import DisciplinePriest from 'analysis/retail/priest/discipline';
import HolyPriest from 'analysis/retail/priest/holy';
import ShadowPriest from 'analysis/retail/priest/shadow';
import AssassinationRogue from 'analysis/retail/rogue/assassination';
import OutlawRogue from 'analysis/retail/rogue/outlaw';
import ElementalShaman from 'analysis/retail/shaman/elemental';
import SubtletyRogue from 'analysis/retail/rogue/subtlety';
import EnhancementShaman from 'analysis/retail/shaman/enhancement';
import RestorationShaman from 'analysis/retail/shaman/restoration';
import AfflictionWarlock from 'analysis/retail/warlock/affliction';
import DemonologyWarlock from 'analysis/retail/warlock/demonology';
import DestructionWarlock from 'analysis/retail/warlock/destruction';
import ArmsWarrior from 'analysis/retail/warrior/arms';
import FuryWarrior from 'analysis/retail/warrior/fury';
import ProtectionWarrior from 'analysis/retail/warrior/protection';
import HavocDemonHunter from 'analysis/retail/demonhunter/havoc';
import VengeanceDemonHunter from 'analysis/retail/demonhunter/vengeance';
import DevastationEvoker from 'analysis/retail/evoker/devastation';
import PreservationEvoker from 'analysis/retail/evoker/preservation';
// Classic
import ClassicDeathKnightUnholy from 'analysis/classic/deathknight/unholy';
import ClassicDruidRestoration from 'analysis/classic/druid/restoration';
import ClassicMageArcane from 'analysis/classic/mage/arcane';
import ClassicPaladinHoly from 'analysis/classic/paladin/holy';
import ClassicPriest from 'analysis/classic/priest';
import ClassicShaman from 'analysis/classic/shaman';
import ClassicWarlockAffliction from 'analysis/classic/warlock/affliction';
import ClassicWarlockDemonology from 'analysis/classic/warlock/demonology';

import Config from './Config';

const configs: Config[] = [
  BloodDeathKnight,
  UnholyDeathKnight,
  FrostDeathKnight,

  HavocDemonHunter,
  VengeanceDemonHunter,

  BalanceDruid,
  FeralDruid,
  GuardianDruid,
  RestoDruid,

  DevastationEvoker,
  PreservationEvoker,

  BeastMasteryHunter,
  MarksmanshipHunter,
  SurvivalHunter,

  FrostMage,
  FireMage,
  ArcaneMage,

  BrewmasterMonk,
  WindwalkerMonk,
  MistweaverMonk,

  HolyPaladin,
  RetributionPaladin,
  ProtectionPaladin,

  DisciplinePriest,
  HolyPriest,
  ShadowPriest,

  SubtletyRogue,
  AssassinationRogue,
  OutlawRogue,

  ElementalShaman,
  EnhancementShaman,
  RestorationShaman,

  AfflictionWarlock,
  DemonologyWarlock,
  DestructionWarlock,

  ProtectionWarrior,
  ArmsWarrior,
  FuryWarrior,

  // Classic
  ClassicDeathKnightUnholy,
  ClassicDruidRestoration,
  ClassicMageArcane,
  ClassicPaladinHoly,
  ClassicPriest,
  ClassicShaman,
  ClassicWarlockAffliction,
  ClassicWarlockDemonology,
];

export default configs;
