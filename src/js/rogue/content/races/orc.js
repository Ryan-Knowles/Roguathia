
import Humanoid from './_humanoid';
import * as Thresholds from '../../constants/skill-thresholds';
import * as Traits from '../traits/_all';

const opts = { stats: { dex: -1, str: 3, con: 3, int: -3, wis: -2, sight: 1,
  skillBonus: { smash: Thresholds.Competent, unarmed: Thresholds.Basic },
  traits: [Traits.Infravision({ level: 2 })]
} };
export default class Orc extends Humanoid {
  constructor() {
    super(opts);
  }
}