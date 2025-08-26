"use client";

import {
  Box,
  VStack,
  IconButton,
  Text,
  HStack,
  Separator,
} from "@chakra-ui/react";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerContent,
  DrawerRoot,
} from "@chakra-ui/react";
import {
  RiMenuLine,
  RiHomeLine,
  RiCalendarLine,
  RiVideoLine,
} from "react-icons/ri";
import { useState } from "react";
import Link from "next/link";

const SidebarContent = ({ onClose, ...rest }) => {
  const menuItems = [
    { name: "Dashboard", icon: RiHomeLine, href: "/" },
    { name: "Assignments", icon: RiCalendarLine, href: "/assignments" },
    { name: "Zoom Links", icon: RiVideoLine, href: "/zoom-links" },
  ];

  return (
    <Box
      bg="gray.50"
      borderRight="1px"
      borderRightColor="gray.200"
      w="250px"
      pos="fixed"
      h="full"
      {...rest}
    >
      <VStack align="stretch" spacing={0}>
        <Box p={4}>
          <Text fontSize="xl" fontWeight="bold" color="gray.800">
            Fellow AI Assistant
          </Text>
        </Box>

        <Separator />

        <VStack align="stretch" spacing={1} p={4}>
          {menuItems.map((item) => (
            <Link href={item.href}>
              <HStack
                key={item.name}
                p={3}
                borderRadius="md"
                cursor="pointer"
                _hover={{ bg: "gray.100" }}
                transition="background 0.2s"
              >
                <item.icon size={20} />

                <Text fontSize="sm" fontWeight="medium">
                  {item.name}
                </Text>
              </HStack>
            </Link>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

const MobileSidebar = ({ isOpen, onClose }) => {
  return (
    <DrawerRoot
      open={isOpen}
      onOpenChange={({ open }) => !open && onClose()}
      placement="start"
    >
      <DrawerBackdrop />
      <DrawerContent>
        <DrawerBody p={0}>
          <SidebarContent onClose={onClose} />
        </DrawerBody>
      </DrawerContent>
    </DrawerRoot>
  );
};

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <>
      <SidebarContent
        onClose={onClose}
        display={{ base: "none", md: "block" }}
      />
      <MobileSidebar isOpen={isOpen} onClose={onClose} />

      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        position="fixed"
        top={4}
        left={4}
        zIndex={1000}
      >
        <RiMenuLine />
      </IconButton>
    </>
  );
}
