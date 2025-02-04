import * as React from "react";
import { List, map, toArray } from "../../../Data/List";
import { Record } from "../../../Data/Record";
import { AttributeCombined, AttributeCombinedA_ } from "../../Models/View/AttributeCombined";
import { L10nRecord } from "../../Models/Wiki/L10n";
import { minus } from "../../Utilities/Chars";
import { translate } from "../../Utilities/I18n";
import { pipe_ } from "../../Utilities/pipe";
import { TextBox } from "../Universal/TextBox";
import { AttributeModsListItem } from "./AttributeModsListItem";

export interface AttributeModsProps {
  attributes: List<Record<AttributeCombined>>
  l10n: L10nRecord
}

export function AttributeMods (props: AttributeModsProps) {
  return (
    <TextBox
      className="attribute-mods"
      label={translate (props.l10n) ("attributemodifiers")}
      >
      <table>
        <thead>
          <tr>
            <th className="name"></th>
            <th>{minus}3</th>
            <th>{minus}2</th>
            <th>{minus}1</th>
            <th className="null">0</th>
            <th>+1</th>
            <th>+2</th>
            <th>+3</th>
          </tr>
        </thead>
        <tbody>
          {pipe_ (
            props.attributes,
            map (e => <AttributeModsListItem attribute={e} key={AttributeCombinedA_.id (e)} />),
            toArray
          )}
        </tbody>
      </table>
    </TextBox>
  )
}
