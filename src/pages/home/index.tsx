import { Calendar, LocaleConfig } from "react-native-calendars";
import { View } from "react-native";
import { homeStyles } from "./style";
import { useState } from "react";


LocaleConfig.locales["pt-br"] = {
  monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
  monthNamesShort: ["Jan.", "Fev.", "Mar.", "Abr.", "Maio", "Jun.", "Jul.", "Ago.", "Set.", "Out.", "Nov.", "Dez."],
  dayNames: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
  dayNamesShort: ["Dom.", "Seg.", "Ter.", "Qua.", "Qui.", "Sex.", "Sab."],
};

LocaleConfig.defaultLocale = "pt-br";

const TODAY = new Date();


function HomePage() {
  const [selectedDateString, setSelectedDateString] = useState<string | null>(null);

  return (
    <View style={homeStyles.calendarBox}>
      <Calendar
        onDayPress={d => setSelectedDateString(d.dateString)}
        minDate={TODAY.toDateString()}

        markedDates={selectedDateString ? {
          [selectedDateString]: { selected: true },
        } : void 0}

        headerStyle={{
          borderBottomWidth: 0.5,
          borderBottomColor: "#f8f9fa",
          paddingBottom: 10,
          marginBottom: 10,
        }}

        theme={{
          todayTextColor: "#f57505",
          selectedDayBackgroundColor: "#f57505",
          selectedDayTextColor: "#fefeff",
          monthTextColor: "#0f0f0f",
          textMonthFontSize: 16,
        }}
      />
    </View>
  );
}

export default HomePage;
