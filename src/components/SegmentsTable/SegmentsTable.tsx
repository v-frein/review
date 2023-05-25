import { Link } from "react-router-dom";
import styles from "./SegmentsTable.module.css";
import { ButtonWithIcon, Tag } from "@ui";

import editIcon from "@assets/images/edit.png";
import closeIcon from "@assets/images/close.svg";

export const SegmentsTable = () => {
  return (
    <div>
      <h1 className={styles.taxonomyHeading}>Сегменты</h1>
      <table>
        <tr>
          <td>ID</td>
          <td>Сегмент</td>
          <td>Источник данных</td>
          <td>Описание</td>
          <td>Системы</td>
          <td>Таксономия</td>
          <td>Статус</td>
          <td>Выгружается</td>
          <td>Охват за неделю</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>123124</td>
          <td>
            <Link to="/segment">Ипотека</Link>
          </td>
          <td></td>
          <td>Описание</td>
          <td>afox(single puid) id puld57</td>
          <td>Авто</td>
          <td>
            <Tag name="релиз" />
          </td>
          <td>SSP</td>
          <td>1234565</td>
          <td>
            <ButtonWithIcon image={editIcon} />
          </td>
          <td>
            <ButtonWithIcon bgColor="#FF3D00" image={closeIcon} />
          </td>
        </tr>
        <tr>
          <td>123124</td>
          <td>
            <Link to="/segment">Ипотека</Link>
          </td>
          <td></td>
          <td>Описание</td>
          <td>afox(single puid) id puld57</td>
          <td>Авто</td>
          <td>
            <Tag name="релиз" />
          </td>
          <td>SSP</td>
          <td>1234565</td>
          <td>
            <ButtonWithIcon image={editIcon} />
          </td>
          <td>
            <ButtonWithIcon bgColor="#FF3D00" image={closeIcon} />
          </td>
        </tr>
        <tr>
          <td>123124</td>
          <td>
            <Link to="/segment">Ипотека</Link>
          </td>
          <td></td>
          <td>Описание</td>
          <td>afox(single puid) id puld57</td>
          <td>Авто</td>
          <td>
            <Tag name="релиз" />
          </td>
          <td>SSP</td>
          <td>1234565</td>
          <td>
            <ButtonWithIcon image={editIcon} />
          </td>
          <td>
            <ButtonWithIcon bgColor="#FF3D00" image={closeIcon} />
          </td>
        </tr>
        <tr>
          <td>123124</td>
          <td>
            <Link to="/segment">Ипотека</Link>
          </td>
          <td></td>
          <td>Описание</td>
          <td>afox(single puid) id puld57</td>
          <td>Авто</td>
          <td>
            <Tag name="релиз" />
          </td>
          <td>SSP</td>
          <td>1234565</td>
          <td>
            <ButtonWithIcon image={editIcon} />
          </td>
          <td>
            <ButtonWithIcon bgColor="#FF3D00" image={closeIcon} />
          </td>
        </tr>
        <tr>
          <td>123124</td>
          <td>
            <Link to="/segment">Ипотека</Link>
          </td>
          <td></td>
          <td>Описание</td>
          <td>afox(single puid) id puld57</td>
          <td>Авто</td>
          <td>
            <Tag name="релиз" />
          </td>
          <td>SSP</td>
          <td>1234565</td>
          <td>
            <ButtonWithIcon image={editIcon} />
          </td>
          <td>
            <ButtonWithIcon bgColor="#FF3D00" image={closeIcon} />
          </td>
        </tr>
      </table>
    </div>
  );
};
