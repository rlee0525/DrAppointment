## Component Hierarchy

**AuthFormContainer**
 - AuthForm (two-factor authentication)

**HomeContainer**
 - Search
 - SearchResultsContainer
 - FavoriteDoctorsContainer

**Search**

**SearchResultsContainer**
 - SearchResults

**FavoriteDoctorsContainer**
 - FavoriteDoctorsIndex
  - FavoriteDoctorItem

**DoctorScheduleContainer**
 - DoctorDetailItem
 - DoctorDetailSchedule

**AppointmentContainer**
 - AppointmentDetailItem
 - PatientIndex
  - PatientIndexItem

## Routes

|Path                        | Component                 |
|----------------------------|---------------------------|
| "/"                        | "App"                     |
| "/authenticate"            | "AuthFormContainer"       |
| "/home"                    | "HomeContainer"           |
| "/search"                  | "SearchResultsContainer"  |
| "/doctors/:id"             | "DoctorScheduleContainer" |
| "/appointments"            | "AppointmentContainer"    |
