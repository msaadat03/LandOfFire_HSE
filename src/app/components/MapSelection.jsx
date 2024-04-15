import React, { useState } from 'react';
import { Box, Typography } from "@mui/material";
import cities from "../data/cities.json";

export default function MapSelection() {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCityClick = (city) => {
    // Устанавливаем или снимаем выбор города, если он уже выбран
    setSelectedCity(selectedCity === city ? null : city);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        width: "100%",
        gap: 2,
        overflow: "hidden"  // Улучшение управления пространством
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexBasis: { sm: selectedCity ? "30%" : "0%", xs: "100%" },
          overflow: "auto", // Позволяет прокрутку, если содержимое не помещается
          padding: 2,
          backgroundColor: "primary.main",
          color: "white",
          transition: "flex-basis 0.3s ease" // Плавное открытие и закрытие карточки
        }}
      >
        {selectedCity && (
          <>
            <Typography variant="h6">{selectedCity.title}</Typography>
            <Typography>{selectedCity.description}</Typography>
          </>
        )}
      </Box>
      {cities.map((entry) => (
        <Box
          key={entry.key}
          onClick={() => handleCityClick(entry)}
          sx={{
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            gap: 1,
            padding: 2,
            backgroundColor: selectedCity === entry ? "secondary.light" : "grey.800",
            color: "white",
            flexBasis: { sm: selectedCity ? "70%" : "100%", xs: "100%" },
            transition: "background-color 0.3s", // Плавная смена фона при выборе
            ':hover': {
              backgroundColor: "secondary.dark", // Эффект наведения
            }
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            {entry.title}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}