import { InputGroup } from "@blueprintjs/core";
import React, { useState } from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const onSearchvalueChange = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
    if (e.target.value.length === 0) {
      navigate("/");
    } else {
      navigate({ pathname: "/search", search: `sq=${e.target.value}` });
    }
  };
  return (
    <div className="botflix-header">
      <div className="botflix-title">
        <p onClick={() => navigate("/")}>BotFlix</p>
      </div>
      <div className="botflix-search">
        <InputGroup
          type="search"
          onChange={onSearchvalueChange}
          leftIcon="search"
          value={searchValue}
          placeholder="Search for movie"
        />
      </div>
    </div>
  );
};

export default Header;
