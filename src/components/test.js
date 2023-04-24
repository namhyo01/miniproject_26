import React from "react";

import useDownshift from "use-downshift";

function Bootstrap({ items, label, onChange }) {
  const {
    isOpen,
    getRootProps,
    getMenuProps,
    getItemProps,
    getLabelProps,
    getInputProps,
    getToggleButtonProps,
    highlightedIndex,
    inputValue,
    selectedItem,
    clearSelection
  } = useDownshift({
    onChange
  });

  return (
    <div {...getRootProps()}>
      <div className="form-group">
        <label {...getLabelProps()}>{label}</label>
        <div className="input-group">
          <input
            // onKeyDown={inputOnClickHander}
            {...getInputProps({
              className: "form-control me-sm-2",
              placeholder: "search..."
            })}
          />
          {/* <div class="input-group-append">
            {selectedItem && (
              <button
                class="btn btn-outline-secondary"
                onClick={() => clearSelection()}
              >
                X
              </button>
            )}
            <button
              {...getToggleButtonProps({
                className: "btn btn-outline-secondary dropdown-toggle"
              })}
            />
          </div> */}
        </div>
      </div>

      {isOpen && (
        <ul {...getMenuProps({ className: "list-group" })}>
          {items
            .filter(
              item =>
                !inputValue ||
                inputValue === selectedItem ||
                item.toLowerCase().includes(inputValue.toLowerCase())
            )
            .map((item, index) => (
              <li
                // onClick={() => {
                //     onClick(item);
                // }}
                {...getItemProps({
                    
                  key: index,
                  item,
                  className: `list-group-item ${
                    highlightedIndex === index ? "active" : ""
                  }`
                })}
              >
                {selectedItem === item ? <strong>{item}</strong> : item}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default Bootstrap;
