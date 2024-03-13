import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "./Fullwidth.css"
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const{t, i18n} =useTranslation(); 

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label={t("imkoniyatlar.n32")} {...a11yProps(0)} className='Top'/>
          <Tab label={t("imkoniyatlar.n33")} {...a11yProps(1)} className='Top'/>
          <Tab label={t("imkoniyatlar.n34")} {...a11yProps(2)} className='Top'/>
          <Tab label={t("imkoniyatlar.n35")} {...a11yProps(3)} className='Top'/>
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      <div className="imkoniyat-kundalik-container1">
            <img src="https://static.emaktab.uz/img/uz/features/teachers/schoolpage.png" alt="" className="imkoniyat-kundalik-container-img"/>
            <div className="imkoniyat-kundalik-container-text">
              <h4>{t("O'qituvchilarga.n32")}</h4>
            <p>
            {t("O'qituvchilarga.n33")}
            </p>
            </div>
           </div>
           <div className="imkoniyat-kundalik-container2">
            <div className="imkoniyat-kundalik-container-text">
              <h4>{t("O'qituvchilarga.n34")}</h4>
            <p>
            {t("O'qituvchilarga.n35")}
            </p>
            </div>
            <img src="https://static.emaktab.uz/img/uz/features/teachers/schedule.png" alt="" className="imkoniyat-kundalik-container-img1"/>
           </div>
           <div className="imkoniyat-kundalik-container3">
            <img src="https://static.emaktab.uz/img/uz/features/teachers/journal.png" alt="" className="imkoniyat-kundalik-container-img2"/>
            <div className="imkoniyat-kundalik-container-text">
              <h4>{t("O'qituvchilarga.n36")}</h4>
            <p>
            {t("O'qituvchilarga.n37")}
            </p>
            </div>
           </div>
           <div className="imkoniyat-kundalik-container4">
            <div className="imkoniyat-kundalik-container-text">
              <h4>{t("O'qituvchilarga.n38")}</h4>
            <p>
            {t("O'qituvchilarga.n39")}
            </p>
            </div>
            <img src="https://static.emaktab.uz/img/uz/features/teachers/hometasks.png" alt="" className="imkoniyat-kundalik-container-img"/>
           </div>
           <div className="imkoniyat-kundalik-container5">
            <img src="https://static.emaktab.uz/img/uz/features/teachers/reports.png" alt="" className="imkoniyat-kundalik-container-img"/>
            <div className="imkoniyat-kundalik-container-text">
              <h4>{t("O'qituvchilarga.n40")}</h4>
            <p>
            {t("O'qituvchilarga.n41")}
            </p>
            </div>
           </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1} >
        <div className="imkoniyat-kundalik-container1">
              <img src="https://static.emaktab.uz/img/uz/features/parents/journal.png" alt="" className="imkoniyat-kundalik-container-img"/>
              <div className="imkoniyat-kundalik-container-text">
                <h4>{t("Ota-Onalarga.n42")}</h4>
              <p>
              {t("Ota-Onalarga.n43")}
              </p>
              </div>
            </div>
            <div className="imkoniyat-kundalik-container2">
              <div className="imkoniyat-kundalik-container-text">
                <h4>{t("Ota-Onalarga.n44")}</h4>
              <p>
              {t("Ota-Onalarga.n45")}
              </p>
              </div>
              <img src="https://static.emaktab.uz/img/uz/features/parents/homework.png" alt="" className="imkoniyat-kundalik-container-img1"/>
            </div>
            <div className="imkoniyat-kundalik-container3">
              <img src="https://static.emaktab.uz/img/uz/features/teachers/journal.png" alt="" className="imkoniyat-kundalik-container-img2"/>
              <div className="imkoniyat-kundalik-container-text">
                <h4>{t("Ota-Onalarga.n46")}</h4>
              <p>
              {t("Ota-Onalarga.n47")}
              </p>
              </div>
            </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <div className="imkoniyat-kundalik-container1">
            <img src="https://static.emaktab.uz/img/uz/features/students/journal.png" alt="" className="imkoniyat-kundalik-container-img"/>
            <div className="imkoniyat-kundalik-container-text">
              <h4>{t("O‘quvchilarga.n48")}</h4>
            <p>
            {t("O‘quvchilarga.n49")}
            </p>
            </div>
           </div>
           <div className="imkoniyat-kundalik-container2">
            <div className="imkoniyat-kundalik-container-text">
              <h4>{t("O‘quvchilarga.n50")}</h4>
            <p>
            {t("O‘quvchilarga.n51")}
            </p>
            </div>
            <img src="https://static.emaktab.uz/img/uz/features/students/portfolio.png" alt="" className="imkoniyat-kundalik-container-img1"/>
           </div>
           <div className="imkoniyat-kundalik-container3">
            <img src="https://static.emaktab.uz/img/uz/features/students/communication.png" alt="" className="imkoniyat-kundalik-container-img2"/>
            <div className="imkoniyat-kundalik-container-text">
              <h4>{t("O‘quvchilarga.n52")}</h4>
            <p>
            {t("O‘quvchilarga.n53")}
            </p>
            </div>
           </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
      <div className="imkoniyat-kundalik-container1">
            <img src="https://static.emaktab.uz/img/uz/features/government/stat.png" alt="" className="imkoniyat-kundalik-container-img"/>
            <div className="imkoniyat-kundalik-container-text">
              <h4>{t("Davlat Organlariga.n54")}</h4>
            <p>
            {t("Davlat Organlariga.n55")}
            </p>
            </div>
           </div>
           <div className="imkoniyat-kundalik-container2">
            <div className="imkoniyat-kundalik-container-text">
              <h4>{t("Davlat Organlariga.n56")}</h4>
            <p>
            {t("Davlat Organlariga.n57")}
            </p>
            </div>
            <img src="https://static.emaktab.uz/img/uz/features/government/presentation.png" alt="" className="imkoniyat-kundalik-container-img1"/>
           </div>
           <div className="imkoniyat-kundalik-container3">
            <img src="https://static.emaktab.uz/img/uz/features/government/notifying.png" alt="" className="imkoniyat-kundalik-container-img2"/>
            <div className="imkoniyat-kundalik-container-text">
              <h4>{t("Davlat Organlariga.n58")}</h4>
            <p>
            {t("Davlat Organlariga.n59")}
            </p>
            </div>
           </div>
      </CustomTabPanel>
    </Box>
  );
}