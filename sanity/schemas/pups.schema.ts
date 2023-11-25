const schema = {
    name: "pups",
    title: "Pups",
    type: "document",
    fields: [
        {
            name: "puppyImage",
            title: "Puppy Image",
            type: "image",
            validation: (Rule: any) => Rule.required(),
            options: {
                hotspot: true,
            }
        },
        {
            name: "puppyName",
            title: "Puppy Name",
            type: "string",
            validation: (Rule: any) => Rule.required()
        },
        {
            name: "puppyDesc",
            title: "Puppy Description",
            type: "string",
        },
        {
            name: "puppyColor",
            title: "Puppy Color",
            type: "string",
            validation: (Rule: any) => Rule.required()
        },
        {
            name: "puppyGender",
            title: "Puppy Gender",
            type: "string",
            validation: (Rule: any) => Rule.required()
        },
        {
            name: "puppyAge",
            title: "Puppy Age",
            type: "string",
            validation: (Rule: any) => Rule.required()
        },
        {
            name: "puppyPrice",
            title: "Puppy Price",
            type: "string",
            validation: (Rule: any) => Rule.required()
        },
        {
            name: "puppyAvailability",
            title: "Available",
            type: "string",
            validation: (Rule: any) => Rule.required()
        },

    ]
}

export default schema;