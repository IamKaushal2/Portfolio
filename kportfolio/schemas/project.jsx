export default{
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",
        },
        {
            name: "date",
            type: "datetime",
        },
        {
            name: "domain",
            title: "Domain",
            type: "string",
        },
        {
            name: "description",
            type: "text",
        },
        {
            name: "projectType",
            title: "Project type",
            type: "string",
            options: {
                list: [
                    {value: "personal", title: "Personal"},
                    {value: "client", title: "Client"},
                    {value: "university", title: "University"},
                ],
            },
        },
        {
            name: "Link",
            type: "url",
        },
        {
            name: "tags",
            type: "array",
            of: [
                {
                type: "string",
                },
            ],
            options: {
                layout: "tags",
            },
        },
    ],
};