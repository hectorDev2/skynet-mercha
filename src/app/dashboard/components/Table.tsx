"use client";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Tooltip,
  Button,
} from "@nextui-org/react";
import React, { Key } from "react";
import { columns } from "../jackets/data";
import ModalButton from "./ModalButton";
import { EditIcon } from "./icons/EditIcon";
import Link from "next/link";

const statusColorMap: any = {
  exclusivo: "success",
  paused: "danger",
  vacation: "warning",
};

export default function TableComponent({
  products,
  productTag = "tshirts",
}: any) {
  const renderCell = React.useCallback((product: any, columnKey: Key) => {
    const cellValue = product[columnKey];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg", src: product.images[0]?.url }}
            description={product.description}
            name={cellValue}
          >
            {product.name}
          </User>
        );
      case "exclusive":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">
              {product.tag}
            </p>
          </div>
        );
      case "tag":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[product.tag]}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      case "label":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[product.tag]}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex justify-center items-center gap-2">
            <ModalButton productTag={productTag} productId={product.id} />
            <Tooltip color="success" content="editar">
              <Link href={`/dashboard/${productTag}/${product.id}`}>
                <Button>
                  <EditIcon />
                </Button>
              </Link>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <Table aria-label="Example table with custom cells">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={products ?? []}>
        {(item: { id: number }) => {
          return (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          );
        }}
      </TableBody>
    </Table>
  );
}
