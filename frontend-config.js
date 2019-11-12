import { DamlLfValue } from '@da/ui-core';

export const version = {
  schema: 'navigator-config',
  major: 2,
  minor: 0,
};

export const customViews = (userId, party, role) => ({
  issued_ious: {
    type: "table-view",
    title: "Listed Flats",
    source: {
      type: "contracts",
      filter: [
        {
          field: "argument.lessor",
          value: party,
        },
        {
          field: "template.id",
          value: "Flat:Flat",
        }
      ],
      search: "",
      sort: [
        {
          field: "id",
          direction: "ASCENDING"
        }
      ]
    },
    columns: [
      {
        key: "id",
        title: "Contract ID",
        createCell: ({rowData}) => ({
          type: "text",
          value: rowData.id
        }),
        sortable: true,
        width: 80,
        weight: 0,
        alignment: "left"
      },
      {
        key: "argument.visitor",
        title: "Visitor",
        createCell: ({rowData}) => ({
          type: "text",
          value: DamlLfValue.toJSON(rowData.argument).visitor
        }),
        sortable: true,
        width: 80,
        weight: 0,
        alignment: "left"
      },
      {
        key: "argument.address",
        title: "Address",
        createCell: ({rowData}) => ({
          type: "text",
          value: DamlLfValue.toJSON(rowData.argument).address
        }),
        sortable: true,
        width: 80,
        weight: 0,
        alignment: "left"
      }
    ]
  },
  owned_ious: {
    type: "table-view",
    title: "Leased Flats",
    source: {
      type: "contracts",
      filter: [
        {
          field: "argument.visitor",
          value: party,
        },
        {
          field: "template.id",
          value: "Flat:Flat",
        }
      ],
      search: "",
      sort: [
        {
          field: "id",
          direction: "ASCENDING"
        }
      ]
    },
    columns: [
      {
        key: "id",
        title: "Contract ID",
        createCell: ({rowData}) => ({
          type: "text",
          value: rowData.id
        }),
        sortable: true,
        width: 80,
        weight: 0,
        alignment: "left"
      },
      {
        key: "argument.lessor",
        title: "Lessor",
        createCell: ({rowData}) => ({
          type: "text",
          value: DamlLfValue.toJSON(rowData.argument).lessor
        }),
        sortable: true,
        width: 80,
        weight: 0,
        alignment: "left"
      },
      {
        key: "argument.address",
        title: "Address",
        createCell: ({rowData}) => ({
          type: "text",
          value: DamlLfValue.toJSON(rowData.argument).address
        }),
        sortable: true,
        width: 80,
        weight: 0,
        alignment: "left"
      }
    ]
  },
  transfers: {
    type: "table-view",
    title: "Flat Handovers",
    source: {
      type: "contracts",
      filter: [
        {
          field: "template.id",
          value: "Flat:FlatHandover",
        }
      ],
      search: "",
      sort: [
        {
          field: "id",
          direction: "ASCENDING"
        }
      ]
    },
    columns: [
      {
        key: "id",
        title: "Contract ID",
        createCell: ({rowData}) => ({
          type: "text",
          value: rowData.id
        }),
        sortable: true,
        width: 80,
        weight: 0,
        alignment: "left"
      },
      {
        key: "argument.flat.visitor",
        title: "Current Visitor",
        createCell: ({rowData}) => ({
          type: "text",
          value: DamlLfValue.toJSON(rowData.argument).flat.visitor
        }),
        sortable: true,
        width: 80,
        weight: 0,
        alignment: "left"
      },
      {
        key: "argument.flat.newVisitor",
        title: "New Visitor",
        createCell: ({rowData}) => ({
          type: "text",
          value: DamlLfValue.toJSON(rowData.argument).newVisitor
        }),
        sortable: true,
        width: 80,
        weight: 0,
        alignment: "left"
      },
      {
        key: "argument.flat.lessor",
        title: "Lessor",
        createCell: ({rowData}) => ({
          type: "text",
          value: DamlLfValue.toJSON(rowData.argument).flat.lessor
        }),
        sortable: true,
        width: 80,
        weight: 0,
        alignment: "left"
      },
      {
        key: "argument.flat.address",
        title: "Address",
        createCell: ({rowData}) => ({
          type: "text",
          value: DamlLfValue.toJSON(rowData.argument).flat.address
        }),
        sortable: true,
        width: 80,
        weight: 0,
        alignment: "left"
      }
    ]
  }
})
