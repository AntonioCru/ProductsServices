/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import Button from '@mui/material/Button'

import './genericTable.css'
import { navigate } from 'gatsby'

export default function GenericTable({ rows, linkNavigation }) {
  console.log(rows)
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value)
    setPage(0)
  }

  // ¡contenido tabla
  const columns = [
    { id: 'id', label: 'Id', minWidth: 10 },
    { id: 'name', label: 'Primer nombre', minWidth: 170 },
    {
      id: 'subname',
      label: 'Segundo nombre',
      minWidth: 160,
      align: 'lefth',
      // format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'price',
      label: 'Precio',
      minWidth: 170,
      align: 'right',
      format: (value) => `$ ${value.toLocaleString('es-MX')}`,
    },
    {
      id: 'createdAt',
      label: 'Creado',
      minWidth: 170,
      align: 'right',
      format: (value) => {
        const date = new Date(value)
        const formattedDate = `${date.getDate()}/${
          date.getMonth() + 1
        }/${date.getFullYear()}`
        return formattedDate
      },
    },
    {
      id: '',
      label: 'Acciones',
      minWidth: 170,
      align: 'right',
      format: (
        value,
        row, // Definir el contenido de la celda
      ) => (
        <Button
          variant="contained"
          sx={{ color: 'white' }}
          onClick={() => handleAction(row)}
        >
          Editar
        </Button>
      ),
    },
  ]

  const handleAction = (row) => {
    console.log(linkNavigation)
    console.log('Realizar acción para el registro:', row)
    navigate(linkNavigation, { state: row })
  }
  return (
    <Paper
      sx={{
        width: '100%',
        overflow: 'hidden',
        backgroundColor: 'black',
      }}
    >
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              ? rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        {columns.map((column) => {
                          const value = row[column.id]
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format
                                ? column.format(value, row)
                                : value}
                            </TableCell>
                          )
                        })}
                      </TableRow>
                    )
                  })
              : null}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows ? rows.length : null}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Filas por página:"
      />
    </Paper>
  )
}
