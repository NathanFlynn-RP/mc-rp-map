local isOpen = false

local function setMapVisible(visible)
    isOpen = visible
    SetNuiFocus(visible, visible)
    if visible then
        SendNUIMessage({ type = 'open' })
    end
end

RegisterCommand('mcmap', function()
    setMapVisible(not isOpen)
end, false)

RegisterKeyMapping('mcmap', 'Open MC RP interactive map', 'keyboard', 'F7')

RegisterNUICallback('close', function(_, cb)
    setMapVisible(false)
    cb({ ok = true })
end)
