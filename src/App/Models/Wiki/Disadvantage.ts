import { List } from "../../../Data/List";
import { Nothing } from "../../../Data/Maybe";
import { OrderedMap } from "../../../Data/OrderedMap";
import { fromDefault, Record } from "../../../Data/Record";
import { Categories } from "../../Constants/Categories";
import { AdvantageDisadvantageBase, EntryWithCategory } from "./wikiTypeHelpers";

export interface Disadvantage extends AdvantageDisadvantageBase { }

export const Disadvantage =
  fromDefault<Disadvantage> ({
    id: "",
    name: "",
    cost: Nothing,
    input: Nothing,
    max: Nothing,
    prerequisites: List.empty,
    prerequisitesText: Nothing,
    prerequisitesTextIndex: OrderedMap.empty,
    prerequisitesTextStart: Nothing,
    prerequisitesTextEnd: Nothing,
    tiers: Nothing,
    select: Nothing,
    gr: 0,
    src: List.empty,
    rules: "",
    range: Nothing,
    actions: Nothing,
    apValue: Nothing,
    apValueAppend: Nothing,
    category: Categories.DISADVANTAGES,
  })

export const isDisadvantage =
  (r: EntryWithCategory): r is Record<Disadvantage> =>
    Disadvantage.AL.category (r) === Categories.DISADVANTAGES
