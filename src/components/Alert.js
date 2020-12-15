import React, { useState } from "react"

const Alert = ({
  type,
  icon,
  condition = () => true,
  deleteButton = false,
  children,
}) => {
  const [visible, setVisible] = useState(true)

  const iconMap = {
    info: "fa-info-circle",
    success: "fa-check-square",
    warning: "fa-exclamation-triangle",
    danger: "fa-minus-circle",
  }

  const deleteNotification = () => {
    setVisible(false)
  }

  return (
    <>
      {condition() && (
        <article
          class={`box p-0 message is-${type} ${!visible && "is-hidden"}`}
        >
          <div class="message-body p-0">
            <div
              class="columns is-paddingless is-mobile mr-0"
              style={{ marginLeft: "-1px" }}
            >
              <div
                class={`column has-background-${type} has-text-${type}-light is-narrow is-narrow-mobile p-4`}
                style={{ display: "flex", alignItems: "center" }}
              >
                <div>
                  <i class={`fas ${icon || iconMap[type]} fa-2x`} />
                </div>
              </div>
              <div
                class="column py-4 px-5"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {children}
              </div>
              {deleteButton && (
                <div class="column is-narrow is-narrow-mobile">
                  <button class="delete" onClick={deleteNotification} />
                </div>
              )}
            </div>
          </div>
        </article>
      )}
    </>
  )
}

export default Alert
