import "../../../styles/table.css";
import { ButtonWithIcon, Tag } from "../../../ui";

import editIcon from "@assets/images/edit.png";

export const Table = () => {
  return (
    <table>
      <tr>
        <th>Сегмент</th>
        <th>Размер сегмента</th>
        <th>Размер пересечения</th>
        <th>Размер пересечения / Размер в Bacon/SSP</th>
        <th>Аффинити-индекс</th>
        <th>Косинусное сходство</th>
        <th>Статус</th>
        <th></th>
      </tr>
      <tr>
        <td>Женщины</td>
        <td>24,751,454</td>
        <td>33,782</td>
        <td>18,96%</td>
        <td>34</td>
        <td>0,161</td>
        <td>
          <Tag name="Релиз" />
        </td>
        <td>
          <ButtonWithIcon image={editIcon} name="" />
        </td>
      </tr>
      <tr>
        <td>Женщины</td>
        <td>24,751,454</td>
        <td>33,782</td>
        <td>18,96%</td>
        <td>34</td>
        <td>0,161</td>
        <td>
          <Tag name="Релиз" />
        </td>
        <td>
          <ButtonWithIcon image={editIcon} name="" />
        </td>
      </tr>
      <tr>
        <td>Женщины</td>
        <td>24,751,454</td>
        <td>33,782</td>
        <td>18,96%</td>
        <td>34</td>
        <td>0,161</td>
        <td>
          <Tag name="Релиз" />
        </td>
        <td>
          <ButtonWithIcon image={editIcon} name="" />
        </td>
      </tr>
      <tr>
        <td>Женщины</td>
        <td>24,751,454</td>
        <td>33,782</td>
        <td>18,96%</td>
        <td>34</td>
        <td>0,161</td>
        <td>
          <Tag name="Релиз" />
        </td>
        <td>
          <ButtonWithIcon image={editIcon} name="" />
        </td>
      </tr>
    </table>
  );
};
