```js
{
  session: {
    id: 1,
    first_name: "John",
    last_name: "Doe",
    country_code: 123,
    phone_number: "123-123-1232"
  },
  errors: ["phone number is not valid", "booking couldn't be made"],
  doctorResults: [
    {
      id: 1,
      name: "Dr. Richard Kimble 123 ABC Street Tow...",
      favorited: true
    },
    {
      id: 2,
      name: "Dr. Anna Kimble 123 ABC Street Tow...",
      favorited: false
    }
  ],
  favoriteDoctors: [
    {
      image_url: "...image123.jpg",
      name: "Dr. Richard Kimble",
      phone: "123-123-1234"
    },
    {
      image_url: "...image123.jpg",
      name: "Dr. Anna Kimble",
      phone: "123-123-1234"
    }
  ]
  doctorSchedule: {
    id: 2,
    name: "Dr. John Smith",
    address: "123 ABC Street",
    address2: "ABC Town, CA 99999",
    distance: "1.2 miles",
    image_url: "...image123.jpg",
    favorited: true
    timeslots: [
      "1/30 (M)": [
        {
          time: "10:30am",
          status: "N/A"
        },
        {
          time: "10:45am",
          status: "Full"
        }
        {
          time: "11:00am",
          status: "Open"
        },
      ],
      "1/31 (T)": [
        {
          time: "10:30am",
          status: "Open"
        },
        {
          time: "10:45am",
          status: "Open"
        }
        {
          time: "11:00am",
          status: "Open"
        },
      ],
      "2/1 (W)": [
        {
          time: "10:30am",
          status: "Full"
        },
        {
          time: "10:45am",
          status: "Full"
        }
        {
          time: "11:00am",
          status: "Full"
        }
      ]
    ]
  }
}
```
